"use client";
import React from "react";

const ProductIframe = ({ productId }: any) => {
  const iframeUrls: Record<string, string> = {
    trouser3D: "https://view.moda-meta.com/widget?clientId=client1379&product=trouser3D&view=main",
    // add more products
  };

  const iframeSrc = iframeUrls.trouser3D;

  if (!iframeSrc) return <p>Product not found</p>;

  return (
    <section>
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe src={iframeSrc} width="100%" height="100%" style={{ border: "none" }} title="3D Product Viewer" allowFullScreen />
      </div>
    </section>
  );
};

export default ProductIframe;
