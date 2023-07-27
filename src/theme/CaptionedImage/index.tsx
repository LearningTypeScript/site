import React from "react";

import styles from "./styles.module.css";

export interface CaptionedImageProps {
  alt: string;
  label: string;
  id: string;
  href: string;
  src: string;
}

export function CaptionedImage({
  alt,
  id,
  href,
  label,
  src,
}: CaptionedImageProps) {
  return (
    <p className={styles.captionedImage}>
      <img alt={alt} className={styles.img} id={id} src={src} />
      <label className={styles.label} htmlFor={id}>
        {label} [
        <a href={href} target="_blank">
          source
        </a>
        ]
      </label>
    </p>
  );
}
