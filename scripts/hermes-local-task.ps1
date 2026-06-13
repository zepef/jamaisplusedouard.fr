# Enregistre la tâche planifiée Windows de l'agent Hermès local.
#
# Lance scripts/hermes-local-cron.sh (dans WSL) toutes les 6 h pour intégrer les
# propositions de l'agent Hermès distant. La station n'a pas besoin d'être allumée
# en continu :
#   - -StartWhenAvailable : exécute la tâche dès que possible si une fenêtre a été
#     manquée (machine éteinte) → rattrapage automatique à la réactivation ;
#   - déclencheur AtLogOn : vérifie aussi à chaque ouverture de session.
#
# Usage : OBLIGATOIREMENT dans un PowerShell lancé en administrateur
# (clic droit « Exécuter en tant qu'administrateur »), sinon Register-ScheduledTask
# renvoie « Accès refusé » (0x80070005) :
#   powershell -ExecutionPolicy Bypass -File scripts\hermes-local-task.ps1
# Suppression :
#   Unregister-ScheduledTask -TaskName "HermesLocalIntegration" -Confirm:$false

param(
  [string]$Distro   = "Ubuntu-24.04",
  [string]$Script   = "/home/zepef/projects/jamaisplusedouard.fr/scripts/hermes-local-cron.sh",
  [string]$TaskName = "HermesLocalIntegration"
)

# Vérifie l'élévation : sans droits admin, la création de tâche échoue.
$isAdmin = ([Security.Principal.WindowsPrincipal] `
  [Security.Principal.WindowsIdentity]::GetCurrent() `
).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
  Write-Error "Ce script doit etre lance dans un PowerShell ADMINISTRATEUR (sinon Acces refuse)."
  exit 1
}

$action = New-ScheduledTaskAction -Execute "wsl.exe" `
  -Argument "-d $Distro -- /bin/bash -lc `"$Script`""

# Répétition toutes les 6 h, sans fin, à partir d'aujourd'hui minuit.
$trigger6h = New-ScheduledTaskTrigger -Once -At (Get-Date).Date `
  -RepetitionInterval (New-TimeSpan -Hours 6)

# Filet de sécurité au démarrage / réactivation.
$triggerLogon = New-ScheduledTaskTrigger -AtLogOn

$settings = New-ScheduledTaskSettingsSet `
  -StartWhenAvailable `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -ExecutionTimeLimit (New-TimeSpan -Minutes 30) `
  -MultipleInstances IgnoreNew

Register-ScheduledTask -TaskName $TaskName `
  -Action $action `
  -Trigger @($trigger6h, $triggerLogon) `
  -Settings $settings `
  -Description "Agent Hermès local : intègre les propositions de l'agent distant toutes les 6 h (rattrapage si des sessions ont été manquées)." `
  -Force

Write-Host "Tache '$TaskName' enregistree (toutes les 6 h + au logon, rattrapage active)."
