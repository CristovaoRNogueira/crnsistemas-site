import { ImageResponse } from "next/og";

export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 18,
                    background: "#171717",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFB82E",
                    fontWeight: 900,
                    borderRadius: "20%",
                    fontFamily: "sans-serif",
                }}
            >
                {"</>"}
            </div>
        ),
        {
            ...size,
        }
    );
}
