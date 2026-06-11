import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function HomeScreen() {
  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={s.hero}>
          <View style={s.pill}>
            <View style={s.pillDot} />
            <Text style={s.pillText}>Updated December 2024</Text>
          </View>

          <Text style={s.heroTitle}>
            <Text style={s.heroMain}>React JS</Text>
            <Text style={s.heroVs}> vs </Text>
            <Text style={s.heroMain}>React Native</Text>
          </Text>

          <Text style={s.heroSub}>
            Compare both courses and enroll in the one that fits your goals
          </Text>

          <View style={s.badgeRow}>
            <View style={s.webBadge}>
              <Text style={s.webBadgeText}>🌐 Web</Text>
            </View>
            <View style={s.mobileBadge}>
              <Text style={s.mobileBadgeText}>📱 Mobile</Text>
            </View>
          </View>

          <View style={s.statsRow}>
            {[
              { icon: "👩‍🎓", stat: "240K+",  label: "Students" },
              { icon: "⭐",   stat: "4.8",    label: "Rating" },
              { icon: "💼",   stat: "30-day", label: "Refund" },
            ].map(({ icon, stat, label }) => (
              <View key={label} style={s.statItem}>
                <Text style={s.statIcon}>{icon}</Text>
                <Text style={s.statVal}>{stat}</Text>
                <Text style={s.statLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Section heading */}
        <Text style={s.sectionHeading}>Choose Your Course</Text>
        <Text style={s.sectionSub}>Lifetime access · Certificate · Free updates</Text>

        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000000" },
  scroll: { flex: 1, backgroundColor: "#000000" },
  content: { padding: 16, paddingBottom: 40 },
  hero: { alignItems: "center", paddingVertical: 28, marginBottom: 8 },
  pill: {
    flexDirection: "row", alignItems: "center", gap: 8,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1, borderColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: 999, marginBottom: 20,
  },
  pillDot: { width: 7, height: 7, backgroundColor: "#3b82f6", borderRadius: 999 },
  pillText: { fontSize: 12, color: "#64748b", fontWeight: "600" },
  heroTitle: { fontSize: 30, fontWeight: "800", textAlign: "center", marginBottom: 10, letterSpacing: -0.5, lineHeight: 36 },
  heroMain: { color: "#f1f5f9" },
  heroVs: { color: "#1e293b", fontWeight: "300" },
  heroSub: { fontSize: 14, color: "#475569", textAlign: "center", lineHeight: 21, marginBottom: 20, paddingHorizontal: 16 },
  badgeRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
  webBadge: { backgroundColor: "#2563eb", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  webBadgeText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  mobileBadge: { backgroundColor: "#059669", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  mobileBadgeText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  statsRow: {
    flexDirection: "row", gap: 24,
    paddingTop: 20, borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.06)",
  },
  statItem: { alignItems: "center", gap: 2 },
  statIcon: { fontSize: 20, marginBottom: 2 },
  statVal: { fontSize: 14, fontWeight: "700", color: "#f1f5f9" },
  statLabel: { fontSize: 11, color: "#334155" },
  sectionHeading: { fontSize: 22, fontWeight: "800", color: "#f1f5f9", textAlign: "center", letterSpacing: -0.5, marginBottom: 4 },
  sectionSub: { fontSize: 12, color: "#334155", textAlign: "center", marginBottom: 20 },
});