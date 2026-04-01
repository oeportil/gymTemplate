import { Dimensions, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

// Tamaño del cuadro de escaneo
const SCAN_SIZE = width * 0.7;

// Altura de las zonas oscuras (arriba y abajo)
const SIDE_HEIGHT = (height - SCAN_SIZE) / 2;

export default function QROverlay() {
  return (
    <View style={styles.container} pointerEvents="none">
      {/* Parte oscura superior */}
      <View style={styles.top} />

      {/* Parte central */}
      <View style={styles.middle}>
        <View style={styles.side} />

        <View style={styles.scanBox}>
          {/* Esquinas estilo profesional */}
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
        </View>

        <View style={styles.side} />
      </View>

      {/* Parte oscura inferior */}
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  top: {
    height: SIDE_HEIGHT,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  middle: {
    flexDirection: "row",
  },

  side: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  bottom: {
    height: SIDE_HEIGHT,
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  scanBox: {
    width: SCAN_SIZE,
    height: SCAN_SIZE,
  },

  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#00ff99",
  },

  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: "#00ff99",
  },

  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#00ff99",
  },

  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: "#00ff99",
  },
});
