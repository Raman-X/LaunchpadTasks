import { useState } from "react";

export default function DragAndDrop() {
  const [containerA, setContainerA] = useState(["Apple", "Banana", "Cherry"]);
  const [containerB, setContainerB] = useState(["Mango", "Orange"]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (item, source) => {
    setDraggingItem({ item, source });
  };

  const handleDrop = (target) => {
    if (!draggingItem) return;

    if (draggingItem.source === target) {
      setDraggingItem(null);
      return;
    }

    if (draggingItem.source === "A") {
      setContainerA(containerA.filter((i) => i !== draggingItem.item));
      setContainerB([...containerB, draggingItem.item]);
    } else {
      setContainerB(containerB.filter((i) => i !== draggingItem.item));
      setContainerA([...containerA, draggingItem.item]);
    }

    setDraggingItem(null);
  };

  return (
    <div className="flex flex-col items-center gap-10 p-10 min-h-screen bg-gradient-to-r from-blue-200 to-green-200 rounded-xl">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-slate-900">
        <span className="text-green-500">Drag</span> and{" "}
        <span className="text-blue-500">Drop</span>
      </h1>

      {/* Containers Wrapper */}
      <div className="flex justify-center items-start gap-12">
        {/* Container A */}
        <div
          className="w-96 min-h-[400px] p-6 border-2 border-blue-500 rounded-2xl bg-blue-50 shadow-lg"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("A")}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-700">Container A</h2>
          {containerA.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(item, "A")}
              className={`p-3 mb-3 rounded-lg cursor-grab border text-center text-lg transition 
                ${
                  draggingItem?.item === item
                    ? "opacity-50 border-dashed border-red-400 bg-red-100"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Container B */}
        <div
          className="w-96 min-h-[400px] p-6 border-2 border-green-500 rounded-2xl bg-green-50 shadow-lg"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("B")}
        >
          <h2 className="text-xl font-bold mb-4 text-green-700">Container B</h2>
          {containerB.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(item, "B")}
              className={`p-3 mb-3 rounded-lg cursor-grab border text-center text-lg transition 
                ${
                  draggingItem?.item === item
                    ? "opacity-50 border-dashed border-red-400 bg-red-100"
                    : "bg-green-200 hover:bg-green-300"
                }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
