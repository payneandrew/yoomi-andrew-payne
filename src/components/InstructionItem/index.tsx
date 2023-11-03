import React from "react";

interface MetadataItemProps {
  IconComponent: React.ComponentType;
  title: string;
  description: string;
}

const MetadataItem: React.FC<MetadataItemProps> = ({
  IconComponent,
  title,
  description,
}) => (
  <div className="flex gap-5 items-center h-16">
    <IconComponent />
    <div>
      <h2 className="font-bold text-base">{title}</h2>
      <p className="opacity-60">{description}</p>
    </div>
  </div>
);

export default MetadataItem;
