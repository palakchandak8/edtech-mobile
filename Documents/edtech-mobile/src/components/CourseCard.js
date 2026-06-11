import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StarRating from "./StarRating";
import VideoPlayer from "./VideoPlayer";
import { colors } from "../theme/colors";

export default function CourseCard({ course }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const c = course.type === "web" ? colors.web : colors.mobile;

  const handleEnroll = () => {
    setEnrolled(true);
    setTimeout(() => {
      setModalVisible(false);
      setEnrolled(false);
    }, 2500);
  };

  return (
    <>
      <View style={s.card}>

        {/* ── Gradient Header ── */}
        <LinearGradient colors={c.gradient} style={s.header}>
          <View style={s.headerTop}>
            <View style={s.iconBox}>
              <Text style={s.iconText}>{course.icon}</Text>
            </View>
            <View style={s.badge}>
              <Text style={s.badgeText}>{course.badge}</Text>
            </View>
          </View>
          <Text style={s.title}>{course.technology}</Text>
          <Text style={s.tagline}>{course.tagline}</Text>
        </LinearGradient>

        {/* Floating price */}
        <View style={s.priceBadge}>
          <Text style={[s.price, { color: c.priceColor }]}>{course.price}</Text>
          <Text style={s.originalPrice}>$199.99</Text>
        </View>

        {/* ── Body ── */}
        <View style={s.body}>

          {/* Rating + Students */}
          <View style={s.ratingRow}>
            <StarRating rating={course.rating} />
            <Text style={s.students}>{course.students} students</Text>
          </View>
          <View style={s.divider} />

          {/* Description */}
          <Text style={s.description}>{course.description}</Text>

          {/* Meta grid */}
          <View style={s.metaGrid}>
            {[
              { label: "Duration",   value: course.duration,    icon: "⏱" },
              { label: "Level",      value: course.level,       icon: "📊" },
              { label: "Instructor", value: course.instructor,  icon: "👨‍🏫" },
              { label: "Updated",    value: course.lastUpdated, icon: "🗓" },
            ].map((item) => (
              <View
                key={item.label}
                style={[s.metaBox, { backgroundColor: c.softBg, borderColor: c.border }]}
              >
                <Text style={[s.metaLabel, { color: c.text }]}>
                  {item.icon} {item.label}
                </Text>
                <Text style={s.metaValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          {/* ── Video Preview toggle ── */}
          <TouchableOpacity
            style={[s.videoToggle, { backgroundColor: c.softBg, borderColor: c.border }]}
            onPress={() => setShowVideo(!showVideo)}
            activeOpacity={0.8}
          >
            <Text style={{ fontSize: 16 }}>🎬</Text>
            <Text style={[s.videoToggleText, { color: c.text }]}>
              {showVideo ? "Hide Course Preview" : "Watch Free Preview"}
            </Text>
            <Text style={[s.chevron, { transform: [{ rotate: showVideo ? "180deg" : "0deg" }] }]}>
              ▾
            </Text>
          </TouchableOpacity>

          {showVideo && <VideoPlayer course={course} />}

          {/* What you'll learn */}
          <Text style={s.sectionLabel}>WHAT YOU'LL LEARN</Text>
          {course.highlights.map((item, i) => (
            <View key={i} style={s.bulletRow}>
              <View style={[s.checkCircle, { backgroundColor: c.softBg, borderColor: c.border }]}>
                <Text style={[s.checkMark, { color: c.text }]}>✓</Text>
              </View>
              <Text style={s.bulletText}>{item}</Text>
            </View>
          ))}

          {/* Projects */}
          <Text style={s.sectionLabel}>PROJECTS YOU'LL BUILD</Text>
          {course.projects.map((p, i) => (
            <View
              key={i}
              style={[s.projectRow, { backgroundColor: c.softBg, borderColor: c.border }]}
            >
              <View style={[s.projectIcon, { backgroundColor: c.primary }]}>
                <Text style={{ fontSize: 14 }}>🛠</Text>
              </View>
              <View>
                <Text style={s.projectName}>{p.name}</Text>
                <Text style={s.projectDesc}>{p.desc}</Text>
              </View>
            </View>
          ))}

          {/* Pros / Cons */}
          <View style={s.prosConsRow}>
            <View style={s.prosBox}>
              <Text style={s.prosLabel}>PROS</Text>
              {course.pros.map((pro, i) => (
                <Text key={i} style={s.proText}>+ {pro}</Text>
              ))}
            </View>
            <View style={s.consBox}>
              <Text style={s.consLabel}>CONS</Text>
              {course.cons.map((con, i) => (
                <Text key={i} style={s.conText}>− {con}</Text>
              ))}
            </View>
          </View>

          {/* Enroll CTA */}
          <View style={s.priceRow}>
            <Text style={[s.bigPrice, { color: c.priceColor }]}>{course.price}</Text>
            <Text style={s.strikePrice}>$199.99</Text>
          </View>

          <TouchableOpacity
            style={[s.enrollBtn, { backgroundColor: c.primary }]}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.85}
          >
            <Text style={s.enrollBtnText}>Enroll Now — {course.price}</Text>
          </TouchableOpacity>
          <Text style={s.guarantee}>🔒 30-day money-back guarantee</Text>
        </View>
      </View>

      {/* ── Enroll Modal ── */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={s.overlay}>
          <View style={s.modalBox}>
            {enrolled ? (
              <View style={s.successBox}>
                <View style={s.successCircle}>
                  <Text style={{ fontSize: 36 }}>✅</Text>
                </View>
                <Text style={s.successTitle}>You're enrolled! 🎉</Text>
                <Text style={s.successText}>
                  Welcome to {course.technology}.{"\n"}Check your email for access details.
                </Text>
              </View>
            ) : (
              <>
                <LinearGradient colors={c.gradient} style={s.modalHeader}>
                  <Text style={s.modalIcon}>{course.icon}</Text>
                  <View>
                    <Text style={s.modalTitle}>{course.technology}</Text>
                    <Text style={s.modalTagline}>{course.tagline}</Text>
                  </View>
                </LinearGradient>

                <View style={s.modalBody}>
                  <Text style={s.orderLabel}>ORDER SUMMARY</Text>
                  <View style={s.orderBox}>
                    {[
                      ["Course",     course.technology],
                      ["Instructor", course.instructor],
                      ["Duration",   course.duration],
                      ["Access",     "Lifetime + updates"],
                    ].map(([label, val], i) => (
                      <View
                        key={label}
                        style={[s.orderRow, i < 3 && s.orderRowBorder]}
                      >
                        <Text style={s.orderKey}>{label}</Text>
                        <Text style={s.orderVal}>{val}</Text>
                      </View>
                    ))}
                    <View style={s.totalRow}>
                      <Text style={s.totalLabel}>Total today</Text>
                      <View style={{ flexDirection: "row", alignItems: "baseline", gap: 8 }}>
                        <Text style={[s.totalPrice, { color: c.priceColor }]}>
                          {course.price}
                        </Text>
                        <Text style={s.strikeSmall}>$199.99</Text>
                      </View>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={[s.confirmBtn, { backgroundColor: c.primary }]}
                    onPress={handleEnroll}
                    activeOpacity={0.85}
                  >
                    <Text style={s.confirmText}>Confirm — {course.price}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={s.cancelBtn}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={s.cancelText}>Maybe later</Text>
                  </TouchableOpacity>

                  <View style={s.trustRow}>
                    {["🔒 Secure", "↩️ 30-day", "♾️ Lifetime"].map((t) => (
                      <Text key={t} style={s.trustText}>{t}</Text>
                    ))}
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: "#111111",
    borderRadius: 20,
    marginBottom: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },
  header: { padding: 24, paddingBottom: 30 },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  iconBox: {
    width: 52, height: 52,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 14,
    alignItems: "center", justifyContent: "center",
  },
  iconText: { fontSize: 26 },
  badge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12, paddingVertical: 5,
    borderRadius: 999,
  },
  badgeText: { color: "#fff", fontSize: 11, fontWeight: "700", letterSpacing: 1 },
  title: { fontSize: 26, fontWeight: "800", color: "#fff", marginBottom: 4 },
  tagline: { fontSize: 13, color: "rgba(255,255,255,0.75)" },
  priceBadge: {
    position: "absolute",
    top: 148, right: 20,
    backgroundColor: "#111111",
    borderWidth: 1, borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 14,
    paddingHorizontal: 14, paddingVertical: 8,
    flexDirection: "row", alignItems: "baseline", gap: 6,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5, shadowRadius: 8, elevation: 8,
  },
  price: { fontSize: 20, fontWeight: "800" },
  originalPrice: { fontSize: 12, color: "#334155", textDecorationLine: "line-through" },
  body: { padding: 20, paddingTop: 32 },
  ratingRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", marginBottom: 14,
  },
  students: { fontSize: 12, color: "#475569" },
  divider: { height: 1, backgroundColor: "rgba(255,255,255,0.06)", marginBottom: 14 },
  description: {
    fontSize: 13, color: "#64748b",
    lineHeight: 20, textAlign: "center", marginBottom: 16,
  },
  metaGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 },
  metaBox: {
    width: "48%", borderRadius: 12, borderWidth: 1,
    padding: 11, alignItems: "center",
  },
  metaLabel: { fontSize: 10, fontWeight: "700", letterSpacing: 0.8, marginBottom: 3, textTransform: "uppercase" },
  metaValue: { fontSize: 12, fontWeight: "600", color: "#cbd5e1", textAlign: "center" },
  videoToggle: {
    flexDirection: "row", alignItems: "center", gap: 10,
    padding: 13, borderRadius: 12, borderWidth: 1, marginBottom: 14,
  },
  videoToggleText: { fontSize: 13, fontWeight: "700", flex: 1 },
  chevron: { color: "#475569", fontSize: 16 },
  sectionLabel: {
    fontSize: 10, fontWeight: "700", color: "#334155",
    letterSpacing: 1.5, textAlign: "center", marginBottom: 10,
  },
  bulletRow: { flexDirection: "row", alignItems: "flex-start", gap: 10, marginBottom: 7 },
  checkCircle: {
    width: 18, height: 18, borderRadius: 9, borderWidth: 1,
    alignItems: "center", justifyContent: "center", marginTop: 1,
  },
  checkMark: { fontSize: 10, fontWeight: "700" },
  bulletText: { fontSize: 13, color: "#64748b", flex: 1, lineHeight: 19 },
  projectRow: {
    flexDirection: "row", alignItems: "center", gap: 12,
    borderRadius: 12, borderWidth: 1, padding: 11, marginBottom: 7,
  },
  projectIcon: {
    width: 32, height: 32, borderRadius: 10,
    alignItems: "center", justifyContent: "center",
  },
  projectName: { fontSize: 13, fontWeight: "600", color: "#cbd5e1" },
  projectDesc: { fontSize: 11, color: "#475569" },
  prosConsRow: { flexDirection: "row", gap: 8, marginTop: 14, marginBottom: 18 },
  prosBox: {
    flex: 1, backgroundColor: "rgba(16,185,129,0.06)",
    borderRadius: 12, borderWidth: 1, borderColor: "rgba(16,185,129,0.12)", padding: 12,
  },
  consBox: {
    flex: 1, backgroundColor: "rgba(239,68,68,0.06)",
    borderRadius: 12, borderWidth: 1, borderColor: "rgba(239,68,68,0.12)", padding: 12,
  },
  prosLabel: { fontSize: 10, fontWeight: "800", color: "#34d399", letterSpacing: 1.5, textAlign: "center", marginBottom: 7 },
  consLabel: { fontSize: 10, fontWeight: "800", color: "#f87171", letterSpacing: 1.5, textAlign: "center", marginBottom: 7 },
  proText: { fontSize: 11, color: "#64748b", marginBottom: 4 },
  conText: { fontSize: 11, color: "#64748b", marginBottom: 4 },
  priceRow: { flexDirection: "row", alignItems: "baseline", gap: 10, marginBottom: 12 },
  bigPrice: { fontSize: 24, fontWeight: "800" },
  strikePrice: { fontSize: 13, color: "#334155", textDecorationLine: "line-through" },
  enrollBtn: { padding: 16, borderRadius: 14, alignItems: "center", marginBottom: 10 },
  enrollBtnText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  guarantee: { textAlign: "center", fontSize: 11, color: "#334155" },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.85)", justifyContent: "flex-end" },
  modalBox: {
    backgroundColor: "#111111", borderTopLeftRadius: 24, borderTopRightRadius: 24,
    overflow: "hidden", borderWidth: 1, borderColor: "rgba(255,255,255,0.08)",
  },
  modalHeader: { flexDirection: "row", alignItems: "center", gap: 14, padding: 22 },
  modalIcon: { fontSize: 32 },
  modalTitle: { fontSize: 18, fontWeight: "800", color: "#fff" },
  modalTagline: { fontSize: 12, color: "rgba(255,255,255,0.65)" },
  modalBody: { padding: 22 },
  orderLabel: { fontSize: 10, fontWeight: "700", color: "#334155", letterSpacing: 1.5, textAlign: "center", marginBottom: 12 },
  orderBox: {
    backgroundColor: "#0a0a0a", borderRadius: 14,
    borderWidth: 1, borderColor: "rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 16,
  },
  orderRow: { flexDirection: "row", justifyContent: "space-between", padding: 12 },
  orderRowBorder: { borderBottomWidth: 1, borderBottomColor: "rgba(255,255,255,0.05)" },
  orderKey: { fontSize: 13, color: "#475569" },
  orderVal: { fontSize: 13, fontWeight: "600", color: "#cbd5e1" },
  totalRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", padding: 14,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.06)",
  },
  totalLabel: { fontSize: 14, fontWeight: "700", color: "#94a3b8" },
  totalPrice: { fontSize: 20, fontWeight: "800" },
  strikeSmall: { fontSize: 12, color: "#334155", textDecorationLine: "line-through" },
  confirmBtn: { padding: 15, borderRadius: 14, alignItems: "center", marginBottom: 10 },
  confirmText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  cancelBtn: {
    padding: 13, borderRadius: 14, alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1, borderColor: "rgba(255,255,255,0.06)", marginBottom: 16,
  },
  cancelText: { fontSize: 14, color: "#475569", fontWeight: "600" },
  trustRow: { flexDirection: "row", justifyContent: "center", gap: 16, paddingTop: 14, borderTopWidth: 1, borderTopColor: "rgba(255,255,255,0.05)" },
  trustText: { fontSize: 11, color: "#334155" },
  successBox: { padding: 44, alignItems: "center" },
  successCircle: {
    width: 72, height: 72, backgroundColor: "rgba(16,185,129,0.1)",
    borderRadius: 36, borderWidth: 1, borderColor: "rgba(16,185,129,0.2)",
    alignItems: "center", justifyContent: "center", marginBottom: 18,
  },
  successTitle: { fontSize: 22, fontWeight: "800", color: "#f1f5f9", marginBottom: 10, textAlign: "center" },
  successText: { fontSize: 14, color: "#64748b", textAlign: "center", lineHeight: 22 },
});