import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StarRating({ rating }) {
  return (
    <View style={s.row}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Text
          key={star}
          style={[s.star, { color: star <= Math.floor(rating) ? "#facc15" : "#1e293b" }]}
        >
          ★
        </Text>
      ))}
      <Text style={s.score}>{rating}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  star: { fontSize: 15, marginRight: 1 },
  score: { fontSize: 13, fontWeight: "700", color: "#94a3b8", marginLeft: 5 },
});