import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { courses } from "../data/courses";

const rows = [
  { label: "Platform",   icon: "🖥",  fn: (c) => c.type === "web" ? "Web browsers" : "iOS & Android" },
  { label: "Language",   icon: "💻",  fn: () => "JavaScript + JSX" },
  { label: "Duration",   icon: "⏱",  fn: (c) => c.duration },
  { label: "Level",      icon: "📊",  fn: (c) => c.level },
  { label: "Price",      icon: "💰",  fn: (c) => c.price },
  { label: "Rating",     icon: "⭐",  fn: (c) => `${c.rating} / 5.0` },
  { label: "Students",   icon: "👥",  fn: (c) => c.students },
  { label: "Instructor", icon: "🧑‍🏫", fn: (c) => c.instructor },
];

export default function CompareScreen() {
  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      <ScrollView style={s.scroll} contentContainerStyle={s.content}>

        <Text style={s.heading}>Side-by-Side Comparison</Text>
        <Text style={s.sub}>Find the course that fits your goals</Text>

        <View style={s.table}>
          {/* Header */}
          <View style={s.tableHeader}>
            <View style={s.featureCell}>
              <Text style={s.featureLabel}>Feature</Text>
            </View>
            {courses.map((c) => (
              <View key={c.id} style={s.courseCol}>
                <Text style={s.courseIcon}>{c.icon}</Text>
                <Text style={s.courseName}>{c.technology}</Text>
                <View style={[s.courseBadge, {
                  backgroundColor: c.type === "web" ? "rgba(59,130,246,0.12)" : "rgba(16,185,129,0.12)",
                  borderColor: c.type === "web" ? "rgba(59,130,246,0.22)" : "rgba(16,185,129,0.22)",
                }]}>
                  <Text style={[s.courseBadgeText, { color: c.type === "web" ? "#60a5fa" : "#34d399" }]}>
                    {c.badge}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Rows */}
          {rows.map((row, i) => (
            <View
              key={i}
              style={[
                s.tableRow,
                { backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" },
                i < rows.length - 1 && s.rowBorder,
              ]}
            >
              <View style={s.featureCell}>
                <Text style={s.rowIcon}>{row.icon}</Text>
                <Text style={s.rowLabel}>{row.label}</Text>
              </View>
              {courses.map((c) => (
                <View key={c.id} style={s.valueCell}>
                  <Text style={[
                    s.rowValue,
                    row.label === "Price" && { color: c.type === "web" ? "#60a5fa" : "#34d399", fontWeight: "700" },
                  ]}>
                    {row.fn(c)}
                  </Text>
                </View>
              ))}
            </View>
          ))}

          {/* Best for */}
          <View style={s.bestForRow}>
            <View style={s.featureCell}>
              <Text style={s.featureLabel}>Best for</Text>
            </View>
            <View style={s.valueCell}>
              <View style={s.bestBlue}>
                <Text style={s.bestBlueText}>Beginners &amp;{"\n"}web careers</Text>
              </View>
            </View>
            <View style={s.valueCell}>
              <View style={s.bestGreen}>
                <Text style={s.bestGreenText}>React devs{"\n"}going mobile</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Recommendation */}
        <View style={s.tipBox}>
          <View style={s.tipIcon}>
            <Text style={{ fontSize: 20 }}>💡</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.tipTitle}>Our recommendation</Text>
            <Text style={s.tipText}>
              <Text style={s.tipBold}>Start with React JS</Text>
              {" "}if you're new to programming or targeting a web career.{"\n\n"}
              <Text style={s.tipBold}>Choose React Native</Text>
              {" "}once you know React and want to build iOS & Android apps.
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000000" },
  scroll: { flex: 1, backgroundColor: "#000000" },
  content: { padding: 16, paddingBottom: 40 },
  heading: { fontSize: 24, fontWeight: "800", color: "#f1f5f9", textAlign: "center", letterSpacing: -0.5, marginBottom: 4 },
  sub: { fontSize: 13, color: "#334155", textAlign: "center", marginBottom: 24 },
  table: { backgroundColor: "#111111", borderRadius: 20, borderWidth: 1, borderColor: "rgba(255,255,255,0.07)", overflow: "hidden", marginBottom: 16 },
  tableHeader: { flexDirection: "row", backgroundColor: "#0a0a0a", padding: 16, borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.06)" },
  featureCell: { flex: 1, flexDirection: "row", alignItems: "center", gap: 4 },
  featureLabel: { fontSize: 10, fontWeight: "700", color: "#334155", textTransform: "uppercase", letterSpacing: 1.5 },
  courseCol: { flex: 1.1, alignItems: "center", gap: 5 },
  courseIcon: { fontSize: 22 },
  courseName: { fontSize: 12, fontWeight: "700", color: "#e2e8f0", textAlign: "center" },
  courseBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999, borderWidth: 1 },
  courseBadgeText: { fontSize: 10, fontWeight: "600" },
  tableRow: { flexDirection: "row", paddingHorizontal: 16, paddingVertical: 12, alignItems: "center" },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.04)" },
  rowIcon: { fontSize: 13, marginRight: 5 },
  rowLabel: { fontSize: 12, color: "#475569", fontWeight: "500" },
  valueCell: { flex: 1.1, alignItems: "center" },
  rowValue: { fontSize: 12, fontWeight: "600", color: "#cbd5e1", textAlign: "center" },
  bestForRow: { flexDirection: "row", backgroundColor: "#0a0a0a", paddingHorizontal: 16, paddingVertical: 14, borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.06)", alignItems: "center" },
  bestBlue: { backgroundColor: "rgba(59,130,246,0.1)", borderRadius: 10, borderWidth: 1, borderColor: "rgba(59,130,246,0.2)", padding: 8, alignItems: "center" },
  bestBlueText: { fontSize: 11, fontWeight: "600", color: "#93c5fd", textAlign: "center", lineHeight: 16 },
  bestGreen: { backgroundColor: "rgba(16,185,129,0.1)", borderRadius: 10, borderWidth: 1, borderColor: "rgba(16,185,129,0.2)", padding: 8, alignItems: "center" },
  bestGreenText: { fontSize: 11, fontWeight: "600", color: "#6ee7b7", textAlign: "center", lineHeight: 16 },
  tipBox: { flexDirection: "row", gap: 14, backgroundColor: "rgba(251,191,36,0.04)", borderWidth: 1, borderColor: "rgba(251,191,36,0.12)", borderRadius: 18, padding: 18, alignItems: "flex-start" },
  tipIcon: { width: 38, height: 38, backgroundColor: "rgba(251,191,36,0.1)", borderRadius: 12, alignItems: "center", justifyContent: "center", flexShrink: 0 },
  tipTitle: { fontSize: 15, fontWeight: "800", color: "#fcd34d", marginBottom: 6 },
  tipText: { fontSize: 13, color: "rgba(253,230,138,0.65)", lineHeight: 20 },
  tipBold: { color: "#fcd34d", fontWeight: "700" },
});