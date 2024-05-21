import { useState } from "react";
type Rect = {
    width: number,
    height: number

}|{};

const useMeasure = () => {

    const [rect, setRect] = useState<Rect>({});

    const resizeObserver = new ResizeObserver((entries) => {

        for (const entry of entries) {
          if (entry.contentBoxSize) {
            const contentBoxSize = entry.contentBoxSize[0];
            setRect((prev) => ({...prev, width: contentBoxSize.inlineSize,
                height: contentBoxSize.blockSize
            }))
            
          } else {
            setRect((prev) => ({...prev, width: entry.contentRect.width,
                height: entry.contentRect.height
            }))
          }
        }
      
      });
      
    return {
        ...rect,
        observer: resizeObserver
    }
}

export default useMeasure