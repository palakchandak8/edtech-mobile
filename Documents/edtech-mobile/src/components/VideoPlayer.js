import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import { colors } from "../theme/colors";

export default function VideoPlayer({ course }) {
  const [showTranscript, setShowTranscript] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const c = course.type === "web" ? colors.web : colors.mobile;

  const openYoutube = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${course.youtubeId}`);
  };

  return (
    <View style={s.wrapper}>
      {/* Video thumbnail tap-to-open */}
      <TouchableOpacity style={s.videoBox} onPress={openYoutube} activeOpacity={0.9}>
        {/* Dark preview with play button */}
        <View style={s.thumbnailBg}>
          <View style={s.youtubeTag}>
            <Text style={s.youtubeTagText}>▶  YouTube</Text>
          </View>
          <View style={[s.playBtn, { backgroundColor: c.primary }]}>
            <Text style={s.playIcon}>▶</Text>
          </View>
          <Text style={s.videoTitle}>{course.technology} — Course Preview</Text>
          <Text style={s.tapHint}>Tap to watch on YouTube</Text>
        </View>
      </TouchableOpacity>

      {/* Video meta */}
      <View style={s.metaRow}>
        <View style={s.metaLeft}>
          <Text style={s.metaTitle}>{course.technology} Full Course Preview</Text>
          <Text style={s.metaSub}>👨‍🏫 {course.instructor} · ⏱ {course.duration}</Text>
        </View>
        <View style={[s.freeBadge, { backgroundColor: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.2)" }]}>
          <View style={s.freeDot} />
          <Text style={s.freeText}>FREE</Text>
        </View>
      </View>

      {/* Transcript toggle */}
      <TouchableOpacity
        style={[
          s.transcriptToggle,
          {
            backgroundColor: showTranscript ? c.softBg : "rgba(255,255,255,0.03)",
            borderColor: showTranscript ? c.border : "rgba(255,255,255,0.07)",
          },
        ]}
        onPress={() => setShowTranscript(!showTranscript)}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 15 }}>📝</Text>
        <Text style={[s.transcriptLabel, { color: showTranscript ? c.text : "#64748b" }]}>
          {showTranscript ? "Hide Transcript" : "Show Transcript"}
        </Text>
        <Text style={[s.chevron, { transform: [{ rotate: showTranscript ? "180deg" : "0deg" }] }]}>
          ▾
        </Text>
      </TouchableOpacity>

      {/* Transcript list */}
      {showTranscript && (
        <View style={s.transcriptBox}>
          <View style={s.transcriptHeader}>
            <Text style={s.transcriptHeaderLabel}>Course Transcript</Text>
            <Text style={s.transcriptHeaderCount}>{course.transcript.length} segments</Text>
          </View>
          {course.transcript.map((line, i) => (
            <TouchableOpacity
              key={i}
              style={[
                s.transcriptRow,
                i < course.transcript.length - 1 && s.transcriptRowBorder,
                activeIndex === i && { backgroundColor: c.softBg },
              ]}
              onPress={() => setActiveIndex(activeIndex === i ? null : i)}
              activeOpacity={0.7}
            >
              <Text style={[s.timeStamp, { color: activeIndex === i ? c.text : "#334155" }]}>
                {line.time}
              </Text>
              <Text style={[s.lineText, { color: activeIndex === i ? "#cbd5e1" : "#64748b" }]}>
                {line.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: { marginBottom: 20 },
  videoBox: {
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 14,
  },
  thumbnailBg: {
    backgroundColor: "#0a0a0a",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: 20,
  },
  youtubeTag: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(239,68,68,0.15)",
    borderWidth: 1,
    borderColor: "rgba(239,68,68,0.25)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  youtubeTagText: { color: "#f87171", fontSize: 10, fontWeight: "700" },
  playBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  playIcon: { color: "#fff", fontSize: 20, marginLeft: 4 },
  videoTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#f1f5f9",
    textAlign: "center",
    marginBottom: 6,
  },
  tapHint: { fontSize: 12, color: "#334155", textAlign: "center" },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  metaLeft: { flex: 1, marginRight: 12 },
  metaTitle: { fontSize: 13, fontWeight: "700", color: "#e2e8f0", marginBottom: 3 },
  metaSub: { fontSize: 11, color: "#475569" },
  freeBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
  },
  freeDot: {
    width: 6,
    height: 6,
    backgroundColor: "#ef4444",
    borderRadius: 3,
  },
  freeText: { color: "#f87171", fontSize: 10, fontWeight: "800" },
  transcriptToggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 13,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
  },
  transcriptLabel: { fontSize: 13, fontWeight: "700", flex: 1 },
  chevron: { color: "#475569", fontSize: 16 },
  transcriptBox: {
    backgroundColor: "#0a0a0a",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    overflow: "hidden",
  },
  transcriptHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.05)",
  },
  transcriptHeaderLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#334155",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  transcriptHeaderCount: { fontSize: 11, color: "#334155" },
  transcriptRow: {
    flexDirection: "row",
    gap: 12,
    padding: 13,
  },
  transcriptRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.04)",
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: "700",
    fontFamily: "monospace",
    minWidth: 38,
    marginTop: 2,
    flexShrink: 0,
  },
  lineText: { fontSize: 13, lineHeight: 19, flex: 1 },
});