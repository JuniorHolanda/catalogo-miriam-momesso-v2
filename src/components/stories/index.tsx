import Stories from "react-insta-stories";
import { SContainerStories } from "./stories.styles";
import holiday from "@/data/holiday.json"

export default function StoriesMobile() {

      const listStories = holiday.map((item) => ({
      content: () => (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* imagem */}
          <img
            src={item.icon}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
  
          {/* descrição */}
          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: 20,
              right: 20,
              color: "#fff",
              background: "#945a5a7f",
              padding: 10,
              borderRadius: 8,
            }}
          >
            {item.description}
          </div>
        </div>
      ),
    }));


    return (
        <SContainerStories>
            <Stories
              stories={listStories}
              defaultInterval={3000}
              width={432}
              height={768}
              loop
            />
        </SContainerStories>
    )
}