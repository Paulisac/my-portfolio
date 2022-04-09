import { useEffect, useState } from "react";

const PageView = ({ style, className, src }) => {
  const [html, setHtml] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(src);
        const result = await response.text();
        setHtml(result);
        setIsLoading(false);
      } catch (e) {
        setHtml("");
        setIsLoading(false);
      }
    };
    if (src) {
      fetchPage();
    }
  }, [src]);

  return (
    <>
      {html !== "" && (
        <div
          style={style}
          className={className}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      )}
      {
          isLoading && <h4 className="my-6 text-center">Loading...</h4>
      }
    </>
  );
};

export default PageView;
