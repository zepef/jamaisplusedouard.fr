"use client";

import { useState } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  Cell,
} from "recharts";

interface Legis {
  lois: number;
  ordo: number;
  f49: number;
  note: string;
}

interface DimData {
  score: number;
  [key: string]: string | number;
}

interface PM {
  id: string;
  name: string;
  start: number;
  end: number;
  president: string;
  party: string;
  side: string;
  cohab: boolean;
  achat: DimData & { inflation_moy: number; smic_reel: string; niv_vie: string };
  secu: DimData & { homicides: number; contexte: string };
  sante: DimData & { esp_h: number; esp_f: number; reforme: string };
  immigr: DimData & { flux: string; contexte: string };
  fiscal: DimData & { prelev: number; dette: number; deficit: number };
  emploi: DimData & { chomage: number; creation: string };
  legis: Legis;
}

const PMS: PM[] = [
  { id:"debre", name:"M. Debré", start:1959, end:1962, president:"de Gaulle", party:"UNR", side:"droite", cohab:false,
    achat:{inflation_moy:4.2, smic_reel:"+8%", niv_vie:"hausse (30 Glorieuses)", score:72},
    secu:{homicides:1.5, contexte:"Guerre Algérie, OAS", score:35},
    sante:{esp_h:67, esp_f:73, reforme:"Extension Sécu agriculteurs", score:45},
    immigr:{flux:"forte imm. travail", contexte:"Rapatriés Algérie", score:50},
    fiscal:{prelev:32, dette:30, deficit:-0.5, score:82},
    emploi:{chomage:1.5, creation:"forte (industrie)", score:95},
    legis:{lois:8, ordo:120, f49:4, note:"Constitution appliquée, ordonnances Algérie"}},
  { id:"pompidou_pm", name:"G. Pompidou", start:1962, end:1968, president:"de Gaulle", party:"UNR/UDR", side:"droite", cohab:false,
    achat:{inflation_moy:3.5, smic_reel:"+15%", niv_vie:"forte hausse", score:80},
    secu:{homicides:1.4, contexte:"Stabilité pré-68", score:70},
    sante:{esp_h:68, esp_f:75, reforme:"CHU modernisés", score:55},
    immigr:{flux:"imm. travail massive", contexte:"Accords bilatéraux", score:55},
    fiscal:{prelev:34, dette:25, deficit:-0.3, score:85},
    emploi:{chomage:1.8, creation:"très forte", score:92},
    legis:{lois:15, ordo:45, f49:6, note:"Lois sociales, ORTF"}},
  { id:"couve", name:"M. Couve de Murville", start:1968, end:1969, president:"de Gaulle", party:"UDR", side:"droite", cohab:false,
    achat:{inflation_moy:6.5, smic_reel:"+10% (Grenelle)", niv_vie:"rattrapage", score:55},
    secu:{homicides:1.6, contexte:"Post-Mai 68", score:45},
    sante:{esp_h:68, esp_f:75, reforme:"—", score:50},
    immigr:{flux:"stable", contexte:"—", score:60},
    fiscal:{prelev:35, dette:28, deficit:-1.0, score:75},
    emploi:{chomage:2.1, creation:"ralentie", score:85},
    legis:{lois:3, ordo:12, f49:0, note:"Mandat court, post-Mai 68"}},
  { id:"chaban", name:"J. Chaban-Delmas", start:1969, end:1972, president:"Pompidou", party:"UDR", side:"droite", cohab:false,
    achat:{inflation_moy:5.5, smic_reel:"+12%", niv_vie:"hausse soutenue", score:68},
    secu:{homicides:1.7, contexte:"Montée délinquance urbaine", score:60},
    sante:{esp_h:69, esp_f:76, reforme:"Nouvelle société, handicap", score:60},
    immigr:{flux:"forte imm. travail", contexte:"Circulaires Marcellin-Fontanet", score:50},
    fiscal:{prelev:35, dette:22, deficit:-0.2, score:85},
    emploi:{chomage:2.5, creation:"forte", score:88},
    legis:{lois:8, ordo:15, f49:0, note:"SMIC créé, formation continue"}},
  { id:"messmer", name:"P. Messmer", start:1972, end:1974, president:"Pompidou", party:"UDR", side:"droite", cohab:false,
    achat:{inflation_moy:7.3, smic_reel:"+8%", niv_vie:"érodée inflation", score:48},
    secu:{homicides:1.8, contexte:"Urbanisation rapide", score:55},
    sante:{esp_h:69, esp_f:77, reforme:"—", score:52},
    immigr:{flux:"début restriction", contexte:"Suspension imm. travail 1974", score:55},
    fiscal:{prelev:36, dette:20, deficit:-0.5, score:82},
    emploi:{chomage:2.8, creation:"choc pétrolier", score:80},
    legis:{lois:5, ordo:10, f49:0, note:"Plan nucléaire, choc pétrolier 73"}},
  { id:"chirac1", name:"J. Chirac (1er)", start:1974, end:1976, president:"Giscard", party:"RPR", side:"droite", cohab:false,
    achat:{inflation_moy:11.8, smic_reel:"+5%", niv_vie:"dégradée", score:30},
    secu:{homicides:2.0, contexte:"Début insécurité urbaine", score:50},
    sante:{esp_h:69, esp_f:77, reforme:"Loi Veil (IVG)", score:62},
    immigr:{flux:"regroupement familial", contexte:"Décret 1976", score:45},
    fiscal:{prelev:37, dette:22, deficit:-1.5, score:72},
    emploi:{chomage:4.2, creation:"faible", score:62},
    legis:{lois:8, ordo:5, f49:0, note:"IVG, majorité 18 ans, divorce"}},
  { id:"barre", name:"R. Barre", start:1976, end:1981, president:"Giscard", party:"UDF", side:"droite", cohab:false,
    achat:{inflation_moy:11.2, smic_reel:"+2%", niv_vie:"stagnation", score:22},
    secu:{homicides:2.5, contexte:"Banlieues, délinquance", score:40},
    sante:{esp_h:70, esp_f:78, reforme:"—", score:52},
    immigr:{flux:"regroupement familial massif", contexte:"Aide retour Stoléru", score:40},
    fiscal:{prelev:40, dette:25, deficit:-1.8, score:68},
    emploi:{chomage:6.3, creation:"faible", score:45},
    legis:{lois:10, ordo:8, f49:8, note:"Rigueur, 2e choc pétrolier"}},
  { id:"mauroy", name:"P. Mauroy", start:1981, end:1984, president:"Mitterrand", party:"PS", side:"gauche", cohab:false,
    achat:{inflation_moy:9.8, smic_reel:"+10% puis gel", niv_vie:"hausse puis rigueur", score:40},
    secu:{homicides:2.8, contexte:"Pic délinquance (3.5M)", score:25},
    sante:{esp_h:71, esp_f:79, reforme:"Retraite 60 ans, remb. IVG", score:70},
    immigr:{flux:"régularisations 130k", contexte:"Régularisation 81-82", score:30},
    fiscal:{prelev:43, dette:30, deficit:-2.8, score:50},
    emploi:{chomage:8.5, creation:"négative (industrie)", score:30},
    legis:{lois:18, ordo:12, f49:7, note:"39h, 5e sem., nationalisations, abolition peine mort"}},
  { id:"fabius", name:"L. Fabius", start:1984, end:1986, president:"Mitterrand", party:"PS", side:"gauche", cohab:false,
    achat:{inflation_moy:5.8, smic_reel:"+1%", niv_vie:"stagnation", score:38},
    secu:{homicides:2.7, contexte:"Action directe, Minguettes", score:28},
    sante:{esp_h:71, esp_f:79, reforme:"—", score:52},
    immigr:{flux:"carte résident 10 ans", contexte:"1984", score:40},
    fiscal:{prelev:44, dette:33, deficit:-2.5, score:45},
    emploi:{chomage:10.2, creation:"faible", score:22},
    legis:{lois:8, ordo:5, f49:4, note:"Rigueur, sang contaminé"}},
  { id:"chirac2", name:"J. Chirac (2e)", start:1986, end:1988, president:"Mitterrand", party:"RPR", side:"droite", cohab:true,
    achat:{inflation_moy:3.2, smic_reel:"+1%", niv_vie:"stabilisation", score:52},
    secu:{homicides:2.5, contexte:"Attentats 86, Devaquet", score:32},
    sante:{esp_h:72, esp_f:80, reforme:"—", score:52},
    immigr:{flux:"loi Pasqua I", contexte:"Durcissement", score:55},
    fiscal:{prelev:43, dette:35, deficit:-2.0, score:48},
    emploi:{chomage:9.8, creation:"modérée", score:25},
    legis:{lois:12, ordo:30, f49:8, note:"Privatisations, cohabitation"}},
  { id:"rocard", name:"M. Rocard", start:1988, end:1991, president:"Mitterrand", party:"PS", side:"gauche", cohab:false,
    achat:{inflation_moy:3.4, smic_reel:"+3%", niv_vie:"légère hausse", score:58},
    secu:{homicides:2.4, contexte:"Stabilisation relative", score:38},
    sante:{esp_h:73, esp_f:81, reforme:"CSG créée", score:60},
    immigr:{flux:"stable", contexte:"Pic asile ~60k", score:45},
    fiscal:{prelev:43, dette:36, deficit:-1.8, score:50},
    emploi:{chomage:9.0, creation:"RMI instauré", score:28},
    legis:{lois:12, ordo:8, f49:28, note:"RMI, CSG, Nlle-Calédonie, record 49.3"}},
  { id:"cresson", name:"É. Cresson", start:1991, end:1992, president:"Mitterrand", party:"PS", side:"gauche", cohab:false,
    achat:{inflation_moy:3.2, smic_reel:"+1%", niv_vie:"stagnation", score:45},
    secu:{homicides:2.5, contexte:"Émeutes Vaulx-en-Velin", score:28},
    sante:{esp_h:73, esp_f:81, reforme:"—", score:50},
    immigr:{flux:"stable", contexte:"—", score:40},
    fiscal:{prelev:43, dette:40, deficit:-2.5, score:42},
    emploi:{chomage:10.0, creation:"négative", score:22},
    legis:{lois:3, ordo:2, f49:8, note:"Impopulaire, mandat court"}},
  { id:"beregovoy", name:"P. Bérégovoy", start:1992, end:1993, president:"Mitterrand", party:"PS", side:"gauche", cohab:false,
    achat:{inflation_moy:2.4, smic_reel:"+1%", niv_vie:"récession", score:42},
    secu:{homicides:2.4, contexte:"Insécurité croissante", score:30},
    sante:{esp_h:73, esp_f:81, reforme:"—", score:50},
    immigr:{flux:"stable", contexte:"—", score:50},
    fiscal:{prelev:43, dette:43, deficit:-3.5, score:38},
    emploi:{chomage:10.8, creation:"négative", score:18},
    legis:{lois:4, ordo:3, f49:3, note:"Récession, Pelat, suicide"}},
  { id:"balladur", name:"É. Balladur", start:1993, end:1995, president:"Mitterrand", party:"RPR", side:"droite", cohab:true,
    achat:{inflation_moy:1.7, smic_reel:"+1%", niv_vie:"stabilisation", score:55},
    secu:{homicides:2.3, contexte:"Plans banlieues", score:35},
    sante:{esp_h:74, esp_f:82, reforme:"—", score:52},
    immigr:{flux:"Pasqua II", contexte:"Code nationalité", score:58},
    fiscal:{prelev:43, dette:49, deficit:-5.0, score:30},
    emploi:{chomage:11.6, creation:"faible", score:15},
    legis:{lois:10, ordo:15, f49:1, note:"Privatisations, Pasqua II"}},
  { id:"juppe", name:"A. Juppé", start:1995, end:1997, president:"Chirac", party:"RPR", side:"droite", cohab:false,
    achat:{inflation_moy:1.8, smic_reel:"+1%", niv_vie:"recul perçu", score:45},
    secu:{homicides:2.1, contexte:"Attentats GIA 95, Vigipirate", score:30},
    sante:{esp_h:74, esp_f:82, reforme:"Plan Juppé sécu (retiré)", score:35},
    immigr:{flux:"restriction", contexte:"Lois Debré, St-Bernard", score:50},
    fiscal:{prelev:44, dette:58, deficit:-3.5, score:32},
    emploi:{chomage:12.3, creation:"négative", score:10},
    legis:{lois:8, ordo:6, f49:2, note:"Grèves déc 95, plan retiré"}},
  { id:"jospin", name:"L. Jospin", start:1997, end:2002, president:"Chirac", party:"PS", side:"gauche", cohab:true,
    achat:{inflation_moy:1.5, smic_reel:"+5%", niv_vie:"hausse sensible", score:72},
    secu:{homicides:1.8, contexte:"4.1M faits 2001, thème 2002", score:28},
    sante:{esp_h:75, esp_f:83, reforme:"CMU (1999)", score:78},
    immigr:{flux:"hausse modérée", contexte:"PACS, régul. Chevènement", score:38},
    fiscal:{prelev:44, dette:58, deficit:-1.5, score:48},
    emploi:{chomage:8.6, creation:"très forte +2M", score:60},
    legis:{lois:20, ordo:10, f49:0, note:"35h, CMU, PACS, emplois-jeunes, 0×49.3"}},
  { id:"raffarin", name:"J.-P. Raffarin", start:2002, end:2005, president:"Chirac", party:"UMP", side:"droite", cohab:false,
    achat:{inflation_moy:2.1, smic_reel:"+2%", niv_vie:"passage euro = hausse perçue", score:40},
    secu:{homicides:1.7, contexte:"Sarkozy Intérieur, baisse", score:55},
    sante:{esp_h:76, esp_f:83, reforme:"Plan canicule, AM 2004", score:50},
    immigr:{flux:"hausse", contexte:"Loi Sarkozy 2003", score:45},
    fiscal:{prelev:43, dette:64, deficit:-3.5, score:32},
    emploi:{chomage:9.8, creation:"faible", score:25},
    legis:{lois:12, ordo:55, f49:2, note:"Retraites 2003, décentralisation, réf. UE NON"}},
  { id:"villepin", name:"D. de Villepin", start:2005, end:2007, president:"Chirac", party:"UMP", side:"droite", cohab:false,
    achat:{inflation_moy:1.9, smic_reel:"+2%", niv_vie:"stable", score:52},
    secu:{homicides:1.6, contexte:"Émeutes nov 2005", score:25},
    sante:{esp_h:77, esp_f:84, reforme:"—", score:55},
    immigr:{flux:"hausse", contexte:"Imm. choisie (suite)", score:45},
    fiscal:{prelev:44, dette:64, deficit:-2.5, score:38},
    emploi:{chomage:8.0, creation:"reprise", score:38},
    legis:{lois:6, ordo:20, f49:1, note:"CPE retiré, émeutes 2005"}},
  { id:"fillon", name:"F. Fillon", start:2007, end:2012, president:"Sarkozy", party:"UMP", side:"droite", cohab:false,
    achat:{inflation_moy:2.0, smic_reel:"+1%", niv_vie:"crise 2008, stagnation", score:35},
    secu:{homicides:1.3, contexte:"Baisse continue 3.5→3.0M", score:62},
    sante:{esp_h:78, esp_f:85, reforme:"Franchise médicale, ARS", score:48},
    immigr:{flux:"~200k/an", contexte:"Min. immigration, identité nat.", score:42},
    fiscal:{prelev:43, dette:90, deficit:-5.0, score:18},
    emploi:{chomage:9.8, creation:"crise 09 puis reprise", score:25},
    legis:{lois:25, ordo:70, f49:2, note:"Retraites 62 ans, RSA, LRU, crise 2008"}},
  { id:"ayrault", name:"J.-M. Ayrault", start:2012, end:2014, president:"Hollande", party:"PS", side:"gauche", cohab:false,
    achat:{inflation_moy:1.0, smic_reel:"+1%", niv_vie:"stagnation", score:42},
    secu:{homicides:1.2, contexte:"Merah 2012", score:42},
    sante:{esp_h:79, esp_f:85, reforme:"Tiers payant (annoncé)", score:48},
    immigr:{flux:"~230k/an", contexte:"—", score:42},
    fiscal:{prelev:45, dette:95, deficit:-4.0, score:22},
    emploi:{chomage:10.3, creation:"faible", score:18},
    legis:{lois:10, ordo:25, f49:0, note:"Mariage pour tous, école, CICE"}},
  { id:"valls", name:"M. Valls", start:2014, end:2016, president:"Hollande", party:"PS", side:"gauche", cohab:false,
    achat:{inflation_moy:0.3, smic_reel:"+1%", niv_vie:"stagnation revenus", score:48},
    secu:{homicides:1.4, contexte:"Attentats 2015-16, état urgence", score:20},
    sante:{esp_h:79, esp_f:85, reforme:"Loi Touraine", score:45},
    immigr:{flux:"~250k", contexte:"Crise migrants, Calais", score:30},
    fiscal:{prelev:45, dette:98, deficit:-3.5, score:22},
    emploi:{chomage:10.0, creation:"faible", score:20},
    legis:{lois:10, ordo:20, f49:6, note:"Loi Macron, El Khomri 49.3, état urgence"}},
  { id:"cazeneuve", name:"B. Cazeneuve", start:2016, end:2017, president:"Hollande", party:"PS", side:"gauche", cohab:false,
    achat:{inflation_moy:1.0, smic_reel:"+0.5%", niv_vie:"stable", score:45},
    secu:{homicides:1.3, contexte:"Post-attentats", score:32},
    sante:{esp_h:79, esp_f:85, reforme:"—", score:45},
    immigr:{flux:"~250k", contexte:"Calais démantelé", score:40},
    fiscal:{prelev:45, dette:99, deficit:-3.0, score:22},
    emploi:{chomage:9.5, creation:"légère reprise", score:25},
    legis:{lois:2, ordo:5, f49:0, note:"5 mois, transition"}},
  { id:"philippe", name:"É. Philippe", start:2017, end:2020, president:"Macron", party:"LREM", side:"centre", cohab:false,
    achat:{inflation_moy:1.5, smic_reel:"+1%", niv_vie:"Gilets jaunes = crise", score:32},
    secu:{homicides:1.2, contexte:"GJ, violences policières", score:35},
    sante:{esp_h:79, esp_f:85, reforme:"Ma Santé 2022, Ségur lancé", score:38},
    immigr:{flux:"~270k/an", contexte:"Loi asile-imm. 2018", score:32},
    fiscal:{prelev:44, dette:115, deficit:-3.0, score:18},
    emploi:{chomage:8.1, creation:"bonne pré-COVID", score:42},
    legis:{lois:18, ordo:95, f49:3, note:"Ordo travail, SNCF, retraites suspendue, COVID"}},
  { id:"castex", name:"J. Castex", start:2020, end:2022, president:"Macron", party:"LREM", side:"droite", cohab:false,
    achat:{inflation_moy:2.5, smic_reel:"+3%", niv_vie:"quoi qu'il en coûte puis inflation", score:38},
    secu:{homicides:1.3, contexte:"Anti-pass, narco", score:35},
    sante:{esp_h:79, esp_f:85, reforme:"Ségur +8Md€", score:42},
    immigr:{flux:"~250k", contexte:"Post-COVID", score:40},
    fiscal:{prelev:45, dette:112, deficit:-6.5, score:12},
    emploi:{chomage:7.3, creation:"rebond COVID", score:52},
    legis:{lois:12, ordo:50, f49:0, note:"Pass sanitaire, vaccination"}},
  { id:"borne", name:"É. Borne", start:2022, end:2024, president:"Macron", party:"Renaissance", side:"centre", cohab:false,
    achat:{inflation_moy:5.2, smic_reel:"+2%", niv_vie:"dégradée", score:18},
    secu:{homicides:1.4, contexte:"Émeutes 2023, Nahel, narco", score:18},
    sante:{esp_h:80, esp_f:85, reforme:"—", score:35},
    immigr:{flux:"~300k", contexte:"Loi imm. 2023 censurée", score:25},
    fiscal:{prelev:45, dette:112, deficit:-5.5, score:12},
    emploi:{chomage:7.5, creation:"ralentie", score:42},
    legis:{lois:8, ordo:15, f49:23, note:"Retraites 64 ans 49.3 ×23, record absolu"}},
  { id:"attal", name:"G. Attal", start:2024, end:2024, president:"Macron", party:"Renaissance", side:"centre", cohab:false,
    achat:{inflation_moy:2.2, smic_reel:"+1%", niv_vie:"stabilisation", score:38},
    secu:{homicides:1.3, contexte:"Narco Marseille", score:30},
    sante:{esp_h:80, esp_f:86, reforme:"—", score:35},
    immigr:{flux:"~280k", contexte:"—", score:30},
    fiscal:{prelev:44, dette:113, deficit:-5.5, score:12},
    emploi:{chomage:7.4, creation:"faible", score:42},
    legis:{lois:2, ordo:3, f49:0, note:"8 mois, dissolution"}},
  { id:"barnier", name:"M. Barnier", start:2024, end:2024, president:"Macron", party:"LR", side:"droite", cohab:false,
    achat:{inflation_moy:1.8, smic_reel:"+0.5%", niv_vie:"stagnation", score:40},
    secu:{homicides:1.3, contexte:"—", score:32},
    sante:{esp_h:80, esp_f:86, reforme:"—", score:35},
    immigr:{flux:"~270k", contexte:"—", score:35},
    fiscal:{prelev:44, dette:115, deficit:-6.0, score:10},
    emploi:{chomage:7.5, creation:"stagnation", score:38},
    legis:{lois:1, ordo:2, f49:1, note:"Budget censuré, 3 mois"}},
  { id:"bayrou", name:"F. Bayrou", start:2025, end:2026, president:"Macron", party:"MoDem", side:"centre", cohab:false,
    achat:{inflation_moy:1.5, smic_reel:"+1%", niv_vie:"stagnation", score:38},
    secu:{homicides:1.3, contexte:"Loi anti-narco", score:30},
    sante:{esp_h:80, esp_f:86, reforme:"—", score:32},
    immigr:{flux:"~260k", contexte:"—", score:35},
    fiscal:{prelev:44, dette:116, deficit:-5.5, score:10},
    emploi:{chomage:7.6, creation:"faible", score:35},
    legis:{lois:2, ordo:5, f49:2, note:"Budget 49.3, fin Macron"}},
];

const DIMS = [
  { key:"achat" as const, label:"Pouvoir d'achat", color:"#f59e0b", icon:"\u{1F6D2}" },
  { key:"secu" as const, label:"Sécurité", color:"#ef4444", icon:"\u{1F512}" },
  { key:"sante" as const, label:"Santé / Social", color:"#10b981", icon:"\u{1F3E5}" },
  { key:"immigr" as const, label:"Immigration", color:"#8b5cf6", icon:"\u{1F30D}" },
  { key:"fiscal" as const, label:"Fiscalité / Dette", color:"#3b82f6", icon:"\u{1F4B0}" },
  { key:"emploi" as const, label:"Emploi", color:"#06b6d4", icon:"\u{1F4BC}" },
];

type DimKey = "achat" | "secu" | "sante" | "immigr" | "fiscal" | "emploi";

function avg(pm: PM) {
  return Math.round(DIMS.reduce((s, d) => s + (pm[d.key as DimKey] as DimData).score, 0) / DIMS.length);
}

const SORTED = [...PMS].sort((a, b) => avg(b) - avg(a));

function scoreColor(v: number) {
  if (v <= 25) return "#7f1d1d";
  if (v <= 35) return "#b91c1c";
  if (v <= 45) return "#dc2626";
  if (v <= 55) return "#d97706";
  if (v <= 65) return "#65a30d";
  if (v <= 75) return "#22c55e";
  if (v <= 85) return "#4ade80";
  return "#86efac";
}

function sideColor(side: string) {
  if (side === "gauche") return "#dc2626";
  if (side === "droite") return "#2563eb";
  return "#a855f7";
}

function sideLabel(side: string) {
  if (side === "gauche") return "Gauche";
  if (side === "droite") return "Droite";
  return "Centre";
}

export default function DashboardPage() {
  const [sel, setSel] = useState("philippe");
  const [cmp, setCmp] = useState<string | null>(null);
  const [view, setView] = useState("radar");
  const [showLeg, setShowLeg] = useState(false);

  const pm = PMS.find((p) => p.id === sel)!;
  const pm2 = cmp ? PMS.find((p) => p.id === cmp) ?? null : null;

  const radarData = DIMS.map((d) => ({
    dim: d.label,
    [pm.name]: (pm[d.key as DimKey] as DimData).score,
    ...(pm2 ? { [pm2.name]: (pm2[d.key as DimKey] as DimData).score } : {}),
  }));
  const rankData = SORTED.map((p) => ({ name: p.name, score: avg(p), id: p.id, side: p.side }));
  const timeData = PMS.map((p) => ({
    name: `${p.name.split(" ").pop()} ${String(p.start).slice(2)}`,
    fullName: p.name,
    ...Object.fromEntries(DIMS.map((d) => [d.key, (p[d.key as DimKey] as DimData).score])),
    avg: avg(p),
  }));

  const bdr = "rgba(255,255,255,0.08)";
  const mono = "'JetBrains Mono',monospace";
  const serif = "'Playfair Display',Georgia,serif";
  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "7px 10px",
    background: "#18181b",
    border: "1px solid #3f3f46",
    borderRadius: 5,
    color: "#fafafa",
    fontSize: 13,
    appearance: "auto",
    WebkitAppearance: "menulist",
  };

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: "#d4d4d8", minHeight: "100vh" }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        select option { background: #18181b; color: #fafafa; }
        select:focus { outline: 1px solid #f59e0b; border-color: #f59e0b; }
      `}</style>

      <header style={{ borderBottom: `1px solid ${bdr}`, padding: "24px 20px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#f59e0b", marginBottom: 6 }}>
            Jamais Plus Édouard · Indicateur Multisectoriel
          </div>
          <h1 style={{ fontFamily: serif, fontSize: 26, fontWeight: 900, margin: 0, color: "#fafafa" }}>
            Indicateur multisectoriel des Premiers Ministres
            <br />
            en fonction des préoccupations des électeurs français
          </h1>
          <p style={{ fontFamily: mono, fontSize: 11, color: "#52525b", margin: "6px 0 0" }}>
            28 PM · 1959–2026 · 6 axes citoyens · Sources: INSEE, DARES, SSMSI, DREES, OFPRA, DGFiP
          </p>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 20px 40px" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16, alignItems: "end" }}>
          <div style={{ flex: "1 1 180px" }}>
            <label style={{ fontFamily: mono, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#a1a1aa", display: "block", marginBottom: 3 }}>
              Premier Ministre
            </label>
            <select value={sel} onChange={(e) => setSel(e.target.value)} style={selectStyle}>
              {PMS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.start}–{p.end})
                </option>
              ))}
            </select>
          </div>
          <div style={{ flex: "1 1 180px" }}>
            <label style={{ fontFamily: mono, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#a1a1aa", display: "block", marginBottom: 3 }}>
              Comparer avec
            </label>
            <select value={cmp || ""} onChange={(e) => setCmp(e.target.value || null)} style={selectStyle}>
              <option value="">— Aucun —</option>
              {PMS.filter((p) => p.id !== sel).map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.start}–{p.end})
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {([["radar", "Radar"], ["rank", "Classement"], ["time", "Chronologie"]] as const).map(([k, l]) => (
              <button
                key={k}
                onClick={() => setView(k)}
                style={{
                  padding: "7px 14px",
                  background: view === k ? "#f59e0b" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${view === k ? "#f59e0b" : bdr}`,
                  borderRadius: 5,
                  color: view === k ? "#080b14" : "#a1a1aa",
                  cursor: "pointer",
                  fontSize: 11,
                  fontFamily: mono,
                  fontWeight: view === k ? 600 : 400,
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${bdr}`, borderRadius: 8, padding: "16px 18px", marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h2 style={{ fontFamily: serif, fontSize: 22, fontWeight: 700, margin: 0, color: "#fafafa" }}>{pm.name}</h2>
                <span style={{ padding: "1px 8px", borderRadius: 3, fontSize: 10, fontFamily: mono, fontWeight: 600, color: "#fafafa", background: sideColor(pm.side) }}>
                  {sideLabel(pm.side)}
                </span>
              </div>
              <div style={{ fontFamily: mono, fontSize: 11, color: "#52525b", marginTop: 3 }}>
                {pm.start}–{pm.end} · {pm.president} · {pm.party}
                {pm.cohab ? " · COHABITATION" : ""}
              </div>
              {pm.id === "philippe" && (
                <span style={{ display: "inline-block", marginTop: 6, padding: "2px 8px", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 3, fontFamily: mono, fontSize: 9, color: "#fca5a5", letterSpacing: 1 }}>
                  SUJET DE L&apos;ENQUÊTE
                </span>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: serif, fontSize: 38, fontWeight: 900, color: scoreColor(avg(pm)), lineHeight: 1 }}>{avg(pm)}</div>
              <div style={{ fontFamily: mono, fontSize: 8, color: "#52525b", letterSpacing: 2, textTransform: "uppercase" }}>Score global</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 8, marginTop: 14 }}>
            {DIMS.map((d) => {
              const sc = (pm[d.key as DimKey] as DimData).score;
              const col = scoreColor(sc);
              return (
                <div key={d.key} style={{ background: "rgba(0,0,0,0.3)", borderRadius: 6, padding: "8px 10px", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div style={{ fontFamily: mono, fontSize: 9, color: "#71717a", letterSpacing: 1 }}>
                    {d.icon} {d.label}
                  </div>
                  <div style={{ fontFamily: serif, fontSize: 26, fontWeight: 700, color: col }}>{sc}</div>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginTop: 4 }}>
                    <div style={{ height: 4, background: col, borderRadius: 2, width: `${sc}%`, transition: "width 0.5s" }} />
                  </div>
                  {pm2 && (
                    <div style={{ fontFamily: mono, fontSize: 10, color: "#71717a", marginTop: 4 }}>
                      vs {pm2.name.split(" ").pop()}:{" "}
                      <span style={{ color: scoreColor((pm2[d.key as DimKey] as DimData).score), fontWeight: 600 }}>
                        {(pm2[d.key as DimKey] as DimData).score}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 12, fontSize: 12, color: "#71717a", lineHeight: 1.7 }}>
            <div><b style={{ color: "#f59e0b" }}>Pouvoir d&apos;achat :</b> Inflation {pm.achat.inflation_moy}%/an · SMIC réel {pm.achat.smic_reel} · {pm.achat.niv_vie}</div>
            <div><b style={{ color: "#ef4444" }}>Sécurité :</b> {pm.secu.contexte} · Homicides {pm.secu.homicides}/100k</div>
            <div><b style={{ color: "#10b981" }}>Santé :</b> Esp. vie H{pm.sante.esp_h}/F{pm.sante.esp_f} · {pm.sante.reforme}</div>
            <div><b style={{ color: "#8b5cf6" }}>Immigration :</b> {pm.immigr.flux} · {pm.immigr.contexte}</div>
            <div><b style={{ color: "#3b82f6" }}>Fiscalité :</b> Prélèvements {pm.fiscal.prelev}% PIB · Dette {pm.fiscal.dette}% · Déficit {pm.fiscal.deficit}%</div>
            <div><b style={{ color: "#06b6d4" }}>Emploi :</b> Chômage {pm.emploi.chomage}% · {pm.emploi.creation}</div>
          </div>

          <div style={{ marginTop: 10 }}>
            <button
              onClick={() => setShowLeg(!showLeg)}
              style={{ fontFamily: mono, fontSize: 10, color: "#71717a", background: "none", border: `1px solid ${bdr}`, borderRadius: 4, padding: "3px 10px", cursor: "pointer" }}
            >
              {showLeg ? "Masquer" : "Afficher"} volet législatif (informatif, hors score)
            </button>
            {showLeg && (
              <div style={{ marginTop: 6, padding: "8px 10px", background: "rgba(0,0,0,0.2)", borderRadius: 4, fontFamily: mono, fontSize: 11, color: "#52525b", lineHeight: 1.6 }}>
                {pm.legis.lois} lois majeures · {pm.legis.ordo} ordonnances · {pm.legis.f49} art. 49.3
                <br />
                {pm.legis.note}
              </div>
            )}
          </div>
        </div>

        {/* Viz */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${bdr}`, borderRadius: 8, padding: "16px 18px" }}>
          {view === "radar" && (
            <>
              <h3 style={{ fontFamily: serif, fontSize: 16, margin: "0 0 12px", color: "#e4e4e7" }}>
                Profil citoyen{pm2 ? ` — ${pm.name} vs ${pm2.name}` : ""}
              </h3>
              <ResponsiveContainer width="100%" height={360}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis dataKey="dim" tick={{ fill: "#71717a", fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#3f3f46", fontSize: 9 }} axisLine={false} />
                  <Radar name={pm.name} dataKey={pm.name} stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} strokeWidth={2} />
                  {pm2 && <Radar name={pm2.name} dataKey={pm2.name} stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.12} strokeWidth={2} />}
                  <Legend wrapperStyle={{ fontSize: 11, color: "#71717a" }} />
                </RadarChart>
              </ResponsiveContainer>
            </>
          )}

          {view === "rank" && (
            <>
              <h3 style={{ fontFamily: serif, fontSize: 16, margin: "0 0 4px", color: "#e4e4e7" }}>Classement global</h3>
              <div style={{ fontFamily: mono, fontSize: 10, color: "#52525b", marginBottom: 12, display: "flex", gap: 16 }}>
                <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 2, background: "#2563eb", marginRight: 4, verticalAlign: "middle" }} /> Droite</span>
                <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 2, background: "#dc2626", marginRight: 4, verticalAlign: "middle" }} /> Gauche</span>
                <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 2, background: "#a855f7", marginRight: 4, verticalAlign: "middle" }} /> Centre</span>
                <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 2, background: "#18181b", border: "2px solid #facc15", marginRight: 4, verticalAlign: "middle" }} /> É. Philippe</span>
              </div>
              <ResponsiveContainer width="100%" height={Math.max(500, PMS.length * 24)}>
                <BarChart data={rankData} layout="vertical" margin={{ left: 90, right: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: "#52525b", fontSize: 10 }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: "#a1a1aa", fontSize: 10 }} width={85} />
                  <Tooltip contentStyle={{ background: "#18181b", border: `1px solid ${bdr}`, borderRadius: 6, color: "#e4e4e7", fontSize: 11 }} />
                  <Bar dataKey="score" radius={[0, 3, 3, 0]}>
                    {rankData.map((e, i) => (
                      <Cell
                        key={i}
                        fill={sideColor(e.side)}
                        fillOpacity={e.id === sel ? 1 : e.id === "philippe" ? 1 : 0.6}
                        stroke={e.id === "philippe" ? "#facc15" : e.id === sel ? "#fafafa" : "none"}
                        strokeWidth={e.id === "philippe" ? 3 : e.id === sel ? 2 : 0}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </>
          )}

          {view === "time" && (
            <>
              <h3 style={{ fontFamily: serif, fontSize: 16, margin: "0 0 12px", color: "#e4e4e7" }}>Évolution chronologique</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={timeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="name" tick={{ fill: "#52525b", fontSize: 8, angle: -50 }} height={70} interval={0} textAnchor="end" />
                  <YAxis domain={[0, 100]} tick={{ fill: "#3f3f46", fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ background: "#18181b", border: `1px solid ${bdr}`, borderRadius: 6, color: "#e4e4e7", fontSize: 11 }}
                    labelFormatter={(v, p) => (p as Array<{ payload?: { fullName?: string } }>)?.[0]?.payload?.fullName || String(v)}
                  />
                  <Legend wrapperStyle={{ fontSize: 10, color: "#71717a" }} />
                  <Line type="monotone" dataKey="avg" stroke="#f59e0b" strokeWidth={2.5} name="Score global" dot={{ r: 2.5, fill: "#f59e0b" }} />
                  <Line type="monotone" dataKey="achat" stroke="#fbbf24" strokeWidth={1} strokeDasharray="3 3" name="Pouvoir d'achat" dot={false} />
                  <Line type="monotone" dataKey="emploi" stroke="#06b6d4" strokeWidth={1} strokeDasharray="3 3" name="Emploi" dot={false} />
                  <Line type="monotone" dataKey="secu" stroke="#ef4444" strokeWidth={1} strokeDasharray="3 3" name="Sécurité" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
        </div>

        <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(255,255,255,0.03)", border: `1px solid ${bdr}`, borderRadius: 6 }}>
          <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#52525b", marginBottom: 6 }}>Méthodologie</div>
          <div style={{ fontSize: 11, color: "#52525b", lineHeight: 1.6 }}>
            <b style={{ color: "#71717a" }}>Axes :</b> Pouvoir d&apos;achat, sécurité, santé/social, immigration, fiscalité/dette, emploi — baromètres Ipsos/Odoxa 2025-2026.<br />
            <b style={{ color: "#71717a" }}>Scores :</b> 0–100. Rouge profond (bas) → vert clair (haut). Normalisés sur la Ve République.<br />
            <b style={{ color: "#71717a" }}>Classement :</b> Bleu = droite, Rouge = gauche, Violet = centre/macroniste.<br />
            <b style={{ color: "#71717a" }}>Législatif :</b> Informatif, exclu du score.<br />
            <b style={{ color: "#71717a" }}>Limites :</b> Attribution au PM ≠ causalité. Mandats courts défavorisés.<br />
            <b style={{ color: "#71717a" }}>Sources :</b> INSEE, DARES, SSMSI, DREES, OFPRA, DGFiP, Banque de France.
          </div>
        </div>

        <div style={{ marginTop: 16, fontFamily: mono, fontSize: 9, color: "#3f3f46", textAlign: "center", letterSpacing: 1 }}>
          jamaisplusedouard-fr.vercel.app · moipresident.online · Avril 2026
        </div>
      </div>
    </div>
  );
}
