"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Scale,
  Flame,
  Beef,
  Droplets,
  UtensilsCrossed,
  TrendingDown,
  Apple,
  Baby,
  Stethoscope,
  GraduationCap,
  Calculator,
  ChevronRight,
  X,
  ArrowRight,
  Search,
  CheckCircle2,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "body",
    label: "Body Measurement & BMI",
    icon: Scale,
    color: "#10793f",
    bg: "#edf8f1",
    tools: [
      { no: 1, name: "BMI Calculator", desc: "Weight / Height²", interactive: true },
      { no: 2, name: "Ideal Body Weight", desc: "IBW calculation" },
      { no: 3, name: "Healthy Weight Range", desc: "BMI-based range" },
      { no: 4, name: "Body Fat Percentage", desc: "Body fat estimation" },
      { no: 5, name: "Lean Body Mass", desc: "Fat-free mass" },
      { no: 6, name: "Fat Mass Calculator", desc: "Weight × body fat %" },
      { no: 7, name: "Waist-to-Height Ratio", desc: "Waist / Height" },
      { no: 8, name: "Waist-to-Hip Ratio", desc: "Waist / Hip" },
      { no: 9, name: "BMR Calculator", desc: "Basal metabolic rate", interactive: true },
      { no: 10, name: "Body Surface Area", desc: "BSA calculation" },
    ],
  },
  {
    id: "calories",
    label: "Calories & Energy",
    icon: Flame,
    color: "#b45309",
    bg: "#fef3c7",
    tools: [
      { no: 11, name: "Daily Calorie Calculator", desc: "Daily calorie needs", interactive: true },
      { no: 12, name: "TDEE Calculator", desc: "Total daily energy expenditure", interactive: true },
      { no: 13, name: "Maintenance Calories", desc: "Maintain body weight" },
      { no: 14, name: "Weight Loss Calories", desc: "Calorie deficit" },
      { no: 15, name: "Weight Gain Calories", desc: "Calorie surplus" },
      { no: 16, name: "Calorie Deficit Calculator", desc: "Deficit per day" },
      { no: 17, name: "Calorie Surplus Calculator", desc: "Surplus per day" },
      { no: 18, name: "Resting Energy Calculator", desc: "REE" },
      { no: 19, name: "Activity Calorie Calculator", desc: "Activity expenditure" },
      { no: 20, name: "Exercise Calorie Calculator", desc: "Workout calories" },
    ],
  },
  {
    id: "macros",
    label: "Macronutrient Calculators",
    icon: Beef,
    color: "#7c3aed",
    bg: "#f5f3ff",
    tools: [
      { no: 21, name: "Protein Calculator", desc: "Daily protein requirement", interactive: true },
      { no: 22, name: "Carbohydrate Calculator", desc: "Daily carbohydrate requirement" },
      { no: 23, name: "Fat Calculator", desc: "Daily fat requirement" },
      { no: 24, name: "Fiber Calculator", desc: "Daily fiber requirement" },
      { no: 25, name: "Sugar Intake Calculator", desc: "Sugar intake" },
      { no: 26, name: "Saturated Fat Calculator", desc: "Saturated fat limit" },
      { no: 27, name: "Unsaturated Fat Calculator", desc: "Unsaturated fat" },
      { no: 28, name: "Omega-3 Calculator", desc: "Omega-3 intake" },
      { no: 29, name: "Omega-6 Calculator", desc: "Omega-6 intake" },
      { no: 30, name: "Macro Split Calculator", desc: "Protein / Carbs / Fat %" },
    ],
  },
  {
    id: "hydration",
    label: "Water & Hydration",
    icon: Droplets,
    color: "#0369a1",
    bg: "#e0f2fe",
    tools: [
      { no: 31, name: "Daily Water Calculator", desc: "Daily water estimate", interactive: true },
      { no: 32, name: "Hydration Requirement", desc: "Water requirement" },
      { no: 33, name: "Water Intake per KG", desc: "Weight-based water" },
      { no: 34, name: "Exercise Hydration", desc: "Workout hydration" },
      { no: 35, name: "Sweat Loss Calculator", desc: "Pre/post workout weight" },
      { no: 36, name: "Dehydration Percentage", desc: "Fluid loss %" },
      { no: 37, name: "Electrolyte Requirement", desc: "Electrolyte estimates" },
      { no: 38, name: "Sodium Intake Calculator", desc: "Sodium intake" },
      { no: 39, name: "Potassium Intake Calculator", desc: "Potassium intake" },
      { no: 40, name: "Fluid Balance Calculator", desc: "Fluid intake/output" },
    ],
  },
  {
    id: "diet",
    label: "Diet Planning",
    icon: UtensilsCrossed,
    color: "#0f766e",
    bg: "#f0fdfa",
    tools: [
      { no: 41, name: "Meal Calorie Split", desc: "Calories per meal" },
      { no: 42, name: "Breakfast Calorie Calculator", desc: "Breakfast allocation" },
      { no: 43, name: "Lunch Calorie Calculator", desc: "Lunch allocation" },
      { no: 44, name: "Dinner Calorie Calculator", desc: "Dinner allocation" },
      { no: 45, name: "Snack Calorie Calculator", desc: "Snack allocation" },
      { no: 46, name: "Meal Macro Split", desc: "Macros per meal" },
      { no: 47, name: "Portion Size Calculator", desc: "Food portion" },
      { no: 48, name: "Food Quantity Calculator", desc: "Required food quantity" },
      { no: 49, name: "Recipe Calorie Calculator", desc: "Total recipe calories" },
      { no: 50, name: "Per Serving Calculator", desc: "Calories per serving" },
    ],
  },
  {
    id: "weight",
    label: "Weight Management",
    icon: TrendingDown,
    color: "#dc2626",
    bg: "#fef2f2",
    tools: [
      { no: 51, name: "Weight Loss Timeline", desc: "Estimated duration", interactive: true },
      { no: 52, name: "Weight Gain Timeline", desc: "Estimated duration" },
      { no: 53, name: "Weekly Weight Change", desc: "Weekly change" },
      { no: 54, name: "Monthly Weight Change", desc: "Monthly change" },
      { no: 55, name: "Target Weight Calculator", desc: "Target weight" },
      { no: 56, name: "Weight Difference Calculator", desc: "Current vs target" },
      { no: 57, name: "Calorie-to-Weight Calculator", desc: "Energy balance estimate" },
      { no: 58, name: "Weight Loss Percentage", desc: "Weight reduction %" },
      { no: 59, name: "Weight Gain Percentage", desc: "Weight gain %" },
      { no: 60, name: "Progress Percentage", desc: "Goal completion %" },
    ],
  },
  {
    id: "food",
    label: "Nutrition & Food",
    icon: Apple,
    color: "#16a34a",
    bg: "#f0fdf4",
    tools: [
      { no: 61, name: "Food Calorie Calculator", desc: "Calories from quantity" },
      { no: 62, name: "Food Protein Calculator", desc: "Protein from quantity" },
      { no: 63, name: "Food Carbohydrate Calculator", desc: "Carbs from quantity" },
      { no: 64, name: "Food Fat Calculator", desc: "Fat from quantity" },
      { no: 65, name: "Food Fiber Calculator", desc: "Fiber from quantity" },
      { no: 66, name: "Food Energy Converter", desc: "kcal / kJ" },
      { no: 67, name: "Raw to Cooked Weight", desc: "Food weight conversion" },
      { no: 68, name: "Recipe Scaling Calculator", desc: "Scale ingredients" },
      { no: 69, name: "Food Portion Converter", desc: "Grams / cups / servings" },
      { no: 70, name: "Oil Calorie Calculator", desc: "Calories from cooking oil" },
    ],
  },
  {
    id: "special",
    label: "Special Nutrition",
    icon: Baby,
    color: "#db2777",
    bg: "#fdf2f8",
    tools: [
      { no: 71, name: "Pregnancy Calorie Calculator", desc: "Pregnancy energy estimate" },
      { no: 72, name: "Breastfeeding Calorie Calculator", desc: "Lactation energy estimate" },
      { no: 73, name: "Child Calorie Calculator", desc: "Child energy needs" },
      { no: 74, name: "Teen Nutrition Calculator", desc: "Adolescent energy needs" },
      { no: 75, name: "Senior Nutrition Calculator", desc: "Older adult requirements" },
      { no: 76, name: "Athlete Calorie Calculator", desc: "Sports energy needs" },
      { no: 77, name: "Endurance Nutrition Calculator", desc: "Exercise fueling" },
      { no: 78, name: "Muscle Gain Calculator", desc: "Muscle-building nutrition" },
      { no: 79, name: "Vegetarian Protein Calculator", desc: "Plant protein targets" },
      { no: 80, name: "Vegan Nutrition Calculator", desc: "Nutrient intake estimates" },
    ],
  },
  {
    id: "clinical",
    label: "Clinical Nutrition",
    icon: Stethoscope,
    color: "#0891b2",
    bg: "#ecfeff",
    tools: [
      { no: 81, name: "Diabetes Carbohydrate Calculator", desc: "Carb distribution" },
      { no: 82, name: "Glycemic Load Calculator", desc: "Glycemic load" },
      { no: 83, name: "Glycemic Index Calculator", desc: "GI-based calculation" },
      { no: 84, name: "Sodium Restriction Calculator", desc: "Sodium target" },
      { no: 85, name: "Cholesterol Intake Calculator", desc: "Dietary cholesterol" },
      { no: 86, name: "Renal Protein Calculator", desc: "Weight-based protein target" },
      { no: 87, name: "Renal Fluid Calculator", desc: "Fluid target" },
      { no: 88, name: "Enteral Feeding Calculator", desc: "Feeding volume and energy" },
      { no: 89, name: "Protein-Energy Ratio", desc: "Protein-energy percentage" },
      { no: 90, name: "Nutrition Risk Screening", desc: "Screening score" },
    ],
  },
  {
    id: "pro",
    label: "Professional Dietitian Tools",
    icon: GraduationCap,
    color: "#92400e",
    bg: "#fef3c7",
    tools: [
      { no: 91, name: "Harris-Benedict Calculator", desc: "BMR" },
      { no: 92, name: "Mifflin-St Jeor Calculator", desc: "BMR" },
      { no: 93, name: "Katch-McArdle Calculator", desc: "BMR" },
      { no: 94, name: "Schofield Calculator", desc: "BMR" },
      { no: 95, name: "BMI-for-Age Calculator", desc: "Child growth assessment" },
      { no: 96, name: "IBW Devine Calculator", desc: "Ideal body weight" },
      { no: 97, name: "Adjusted Body Weight", desc: "Adjusted weight" },
      { no: 98, name: "kcal to kJ Converter", desc: "Energy conversion" },
      { no: 99, name: "mg to mcg Converter", desc: "Unit conversion" },
      { no: 100, name: "Nutrition Percentage Calculator", desc: "Nutrient percentage" },
    ],
  },
];

// ─── Calculator Logic ─────────────────────────────────────────────────────────

function calcBMI(weight, height) {
  if (!weight || !height) return null;
  const bmi = weight / (height / 100) ** 2;
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";
  return { bmi: bmi.toFixed(1), category };
}

function calcBMR(weight, height, age, gender) {
  if (!weight || !height || !age) return null;
  let bmr =
    gender === "female"
      ? 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age
      : 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  return bmr.toFixed(0);
}

function calcTDEE(bmr, activity) {
  const factors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };
  return (bmr * (factors[activity] || 1.2)).toFixed(0);
}

function calcWater(weight) {
  if (!weight) return null;
  return ((weight * 35) / 1000).toFixed(1);
}

function calcProtein(weight, goal) {
  if (!weight) return null;
  const factor = goal === "muscle" ? 2.0 : goal === "loss" ? 1.6 : 1.2;
  return (weight * factor).toFixed(0);
}

function calcWeightLossTimeline(currentWeight, targetWeight, deficit) {
  if (!currentWeight || !targetWeight || !deficit) return null;
  const fatToLose = currentWeight - targetWeight;
  if (fatToLose <= 0) return null;
  const calDeficit = Number(deficit);
  const daysNeeded = (fatToLose * 7700) / calDeficit;
  const weeks = Math.ceil(daysNeeded / 7);
  const months = (daysNeeded / 30).toFixed(1);
  return { weeks, months, kg: fatToLose };
}

// ─── Interactive Calculator Modal ─────────────────────────────────────────────

function CalculatorModal({ tool, onClose }) {
  const [result, setResult] = useState(null);

  // BMI State
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiHeight, setBmiHeight] = useState("");

  // BMR / TDEE State
  const [bmrWeight, setBmrWeight] = useState("");
  const [bmrHeight, setBmrHeight] = useState("");
  const [bmrAge, setBmrAge] = useState("");
  const [bmrGender, setBmrGender] = useState("male");
  const [activity, setActivity] = useState("moderate");

  // Water State
  const [waterWeight, setWaterWeight] = useState("");

  // Protein State
  const [protWeight, setProtWeight] = useState("");
  const [protGoal, setProtGoal] = useState("maintain");

  // Weight Loss Timeline
  const [wlCurrent, setWlCurrent] = useState("");
  const [wlTarget, setWlTarget] = useState("");
  const [wlDeficit, setWlDeficit] = useState("500");

  const handleCalc = () => {
    const no = tool.no;
    if (no === 1) {
      setResult(calcBMI(Number(bmiWeight), Number(bmiHeight)));
    } else if (no === 9) {
      setResult({ bmr: calcBMR(Number(bmrWeight), Number(bmrHeight), Number(bmrAge), bmrGender) });
    } else if (no === 11 || no === 12) {
      const bmr = calcBMR(Number(bmrWeight), Number(bmrHeight), Number(bmrAge), bmrGender);
      const tdee = calcTDEE(bmr, activity);
      setResult({ bmr, tdee });
    } else if (no === 21) {
      setResult({ protein: calcProtein(Number(protWeight), protGoal) });
    } else if (no === 31) {
      setResult({ water: calcWater(Number(waterWeight)) });
    } else if (no === 51) {
      setResult(calcWeightLossTimeline(Number(wlCurrent), Number(wlTarget), Number(wlDeficit)));
    }
  };

  const renderForm = () => {
    const no = tool.no;

    if (no === 1) {
      return (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Weight (kg)</label>
            <input type="number" value={bmiWeight} onChange={e => setBmiWeight(e.target.value)} placeholder="e.g. 70" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Height (cm)</label>
            <input type="number" value={bmiHeight} onChange={e => setBmiHeight(e.target.value)} placeholder="e.g. 170" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
          </div>
          {result && (
            <div className="mt-4 p-4 bg-[#edf8f1] rounded-xl border border-green-200">
              <div className="text-3xl font-black text-[#10793f]">{result.bmi}</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">{result.category}</div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-[#10793f]" style={{ width: `${Math.min((result.bmi / 40) * 100, 100)}%` }} />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-1"><span>Underweight</span><span>Normal</span><span>Obese</span></div>
            </div>
          )}
        </div>
      );
    }

    if (no === 9) {
      return (
        <div className="space-y-3">
          <GenderWeightHeightAgeInputs weight={bmrWeight} setWeight={setBmrWeight} height={bmrHeight} setHeight={setBmrHeight} age={bmrAge} setAge={setBmrAge} gender={bmrGender} setGender={setBmrGender} />
          {result && (
            <div className="mt-4 p-4 bg-[#edf8f1] rounded-xl border border-green-200">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Basal Metabolic Rate</div>
              <div className="text-3xl font-black text-[#10793f] mt-1">{result.bmr} <span className="text-base font-semibold text-gray-500">kcal/day</span></div>
              <p className="text-xs text-gray-500 mt-2">This is the minimum calories your body needs at complete rest.</p>
            </div>
          )}
        </div>
      );
    }

    if (no === 11 || no === 12) {
      return (
        <div className="space-y-3">
          <GenderWeightHeightAgeInputs weight={bmrWeight} setWeight={setBmrWeight} height={bmrHeight} setHeight={setBmrHeight} age={bmrAge} setAge={setBmrAge} gender={bmrGender} setGender={setBmrGender} />
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Activity Level</label>
            <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]">
              <option value="sedentary">Sedentary (little/no exercise)</option>
              <option value="light">Light (1–3 days/week)</option>
              <option value="moderate">Moderate (3–5 days/week)</option>
              <option value="active">Active (6–7 days/week)</option>
              <option value="veryActive">Very Active (physical job)</option>
            </select>
          </div>
          {result && (
            <div className="mt-4 p-4 bg-[#edf8f1] rounded-xl border border-green-200 space-y-2">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">BMR</div>
                <div className="text-xl font-black text-gray-800">{result.bmr} <span className="text-sm font-semibold text-gray-500">kcal/day</span></div>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">TDEE (Daily Need)</div>
                <div className="text-3xl font-black text-[#10793f]">{result.tdee} <span className="text-base font-semibold text-gray-500">kcal/day</span></div>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (no === 21) {
      return (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Body Weight (kg)</label>
            <input type="number" value={protWeight} onChange={e => setProtWeight(e.target.value)} placeholder="e.g. 70" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Goal</label>
            <select value={protGoal} onChange={e => setProtGoal(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]">
              <option value="maintain">Maintain Weight (1.2g/kg)</option>
              <option value="loss">Weight Loss (1.6g/kg)</option>
              <option value="muscle">Muscle Gain (2.0g/kg)</option>
            </select>
          </div>
          {result && (
            <div className="mt-4 p-4 bg-[#edf8f1] rounded-xl border border-green-200">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Daily Protein Target</div>
              <div className="text-3xl font-black text-[#10793f] mt-1">{result.protein}g <span className="text-base font-semibold text-gray-500">/ day</span></div>
            </div>
          )}
        </div>
      );
    }

    if (no === 31) {
      return (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Body Weight (kg)</label>
            <input type="number" value={waterWeight} onChange={e => setWaterWeight(e.target.value)} placeholder="e.g. 70" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
          </div>
          {result && (
            <div className="mt-4 p-4 bg-[#edf8f1] rounded-xl border border-green-200">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Daily Water Intake</div>
              <div className="text-3xl font-black text-[#10793f] mt-1">{result.water}L <span className="text-base font-semibold text-gray-500">/ day</span></div>
              <p className="text-xs text-gray-500 mt-2">Based on 35ml per kg of body weight.</p>
            </div>
          )}
        </div>
      );
    }

    if (no === 51) {
      return (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Current Weight (kg)</label>
            <input type="number" value={wlCurrent} onChange={e => setWlCurrent(e.target.value)} placeholder="e.g. 85" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Target Weight (kg)</label>
            <input type="number" value={wlTarget} onChange={e => setWlTarget(e.target.value)} placeholder="e.g. 70" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Daily Calorie Deficit (kcal)</label>
            <select value={wlDeficit} onChange={e => setWlDeficit(e.target.value)} className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]">
              <option value="250">250 kcal/day (Slow – 0.25 kg/week)</option>
              <option value="500">500 kcal/day (Moderate – 0.5 kg/week)</option>
              <option value="750">750 kcal/day (Fast – 0.75 kg/week)</option>
              <option value="1000">1000 kcal/day (Aggressive – 1 kg/week)</option>
            </select>
          </div>
          {result && (
            <div className="mt-4 p-4 bg-[#edf8f1] rounded-xl border border-green-200">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Fat to Lose</div>
              <div className="text-xl font-black text-gray-800">{result.kg} kg</div>
              <div className="mt-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Estimated Time</div>
              <div className="text-3xl font-black text-[#10793f] mt-0.5">{result.weeks} weeks</div>
              <div className="text-sm font-semibold text-gray-600">≈ {result.months} months</div>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#edf8f1" }}>
              <Calculator className="w-4 h-4" style={{ color: "#10793f" }} />
            </div>
            <div>
              <div className="text-sm font-black text-gray-900">{tool.name}</div>
              <div className="text-[10px] text-gray-400">Tool #{tool.no}</div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        <div className="p-5">
          {renderForm()}
          <button
            onClick={handleCalc}
            className="w-full mt-4 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#10793f" }}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

function GenderWeightHeightAgeInputs({ weight, setWeight, height, setHeight, age, setAge, gender, setGender }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => setGender("male")} className={`py-2 rounded-xl text-xs font-bold border transition-all ${gender === "male" ? "bg-[#10793f] text-white border-[#10793f]" : "text-gray-600 border-gray-200 hover:border-[#10793f]"}`}>Male</button>
        <button onClick={() => setGender("female")} className={`py-2 rounded-xl text-xs font-bold border transition-all ${gender === "female" ? "bg-[#10793f] text-white border-[#10793f]" : "text-gray-600 border-gray-200 hover:border-[#10793f]"}`}>Female</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="170" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Age (yrs)</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="25" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#10793f]" />
        </div>
      </div>
    </>
  );
}

// ─── Tool Card ─────────────────────────────────────────────────────────────────

function ToolCard({ tool, catColor, catBg, onOpen }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#10793f]/30 transition-all duration-200 p-4 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-black" style={{ background: catBg, color: catColor }}>
          {tool.no}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-[#10793f] transition-colors">{tool.name}</div>
          <div className="text-[11px] text-gray-500 mt-0.5">{tool.desc}</div>
        </div>
      </div>
      {tool.interactive ? (
        <button
          onClick={() => onOpen(tool)}
          className="w-full py-2 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-1.5"
          style={{ background: "#10793f" }}
        >
          <Calculator className="w-3.5 h-3.5" />
          Calculate
        </button>
      ) : (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Formula-based tool
        </div>
      )}
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState("body");
  const [search, setSearch] = useState("");
  const [openTool, setOpenTool] = useState(null);
  const sectionRefs = useRef({});

  const totalTools = categories.reduce((s, c) => s + c.tools.length, 0);
  const interactiveCount = categories.reduce((s, c) => s + c.tools.filter(t => t.interactive).length, 0);

  const filteredCategories = search.trim()
    ? categories
        .map(cat => ({
          ...cat,
          tools: cat.tools.filter(t =>
            t.name.toLowerCase().includes(search.toLowerCase()) ||
            t.desc.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter(cat => cat.tools.length > 0)
    : categories;

  const activeCategory = categories.find(c => c.id === activeTab);

  const scrollTo = (id) => {
    setActiveTab(id);
    setSearch("");
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #10793f 0%, #0f5f31 60%, #0a4424 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-6">
              <Calculator className="w-3.5 h-3.5" />
              {totalTools} Free Nutrition Tools
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Nutrition Tools &<br />
              <span className="text-green-300">Calculators</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-xl">
              Professional-grade nutrition calculators for body measurements, calories, macros, hydration, and more. Trusted by dietitians across India.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-green-100">
              {[`${totalTools} Tools`, "10 Categories", `${interactiveCount} Interactive`, "100% Free"].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search + Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="py-3 border-b border-gray-100">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search 100 tools..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#10793f] bg-gray-50"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-3.5 h-3.5 text-gray-400" />
                </button>
              )}
            </div>
          </div>
          {/* Category tabs */}
          {!search && (
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
              {categories.map(cat => {
                const Icon = cat.icon;
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollTo(cat.id)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0"
                    style={
                      isActive
                        ? { background: "#10793f", color: "white" }
                        : { background: "transparent", color: "#374151" }
                    }
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {filteredCategories.map(cat => {
          const Icon = cat.icon;
          return (
            <section
              key={cat.id}
              ref={el => { sectionRefs.current[cat.id] = el; }}
              id={`section-${cat.id}`}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: cat.bg }}>
                  <Icon className="w-5 h-5" style={{ color: cat.color }} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">{cat.label}</h2>
                  <div className="text-xs text-gray-500 font-medium">{cat.tools.length} tools · #{cat.tools[0]?.no}–#{cat.tools[cat.tools.length - 1]?.no}</div>
                </div>
              </div>

              {/* Tool Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.tools.map(tool => (
                  <ToolCard
                    key={tool.no}
                    tool={tool}
                    catColor={cat.color}
                    catBg={cat.bg}
                    onOpen={t => setOpenTool({ tool: t, cat })}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="rounded-3xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #10793f 0%, #0f5f31 100%)" }}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Need Personalised Guidance?</h2>
          <p className="text-green-100 mb-6 max-w-md mx-auto">Our certified dietitians use these tools to build custom nutrition plans tailored to your goals.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#10793f] text-sm font-bold hover:bg-green-50 transition-all shadow-lg"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>

      {/* Calculator Modal */}
      {openTool && (
        <CalculatorModal
          tool={openTool.tool}
          onClose={() => setOpenTool(null)}
        />
      )}
    </div>
  );
}

