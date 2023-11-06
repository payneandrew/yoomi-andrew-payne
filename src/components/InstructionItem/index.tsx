import React from "react";

/**
 * MetadataItem Component.
 *
 * This component takes an icon component, a title, and a description as props,
 * then renders a flex container with the icon and details.
 * The icon component is expected to be a React functional component.
 *
 * @component
 * @param {React.ComponentType} props.IconComponent - Icon component to use on the item interface.
 * @param {string} props.title - Title text for the item.
 * @param {string} props.description - Description text for the item.
 *
 * @returns {React.ElementType} The MetadataItem component.
 *
 * @example
 * import YourIconComponent from '../path/to/icon';
 *
 * function ExampleComponent() {
 *   return (
 *     <MetadataItem
 *       IconComponent={YourIconComponent}
 *       title="Example Title"
 *       description="Example Description"
 *     />
 *   );
 * }
 */
interface MetadataItemProps {
  IconComponent: React.ComponentType;
  title: string;
  descriptions: string[];
}

const MetadataItem: React.FC<MetadataItemProps> = ({
  IconComponent,
  title,
  descriptions,
}) => (
  <div className="flex gap-5 items-center">
    <IconComponent />
    <div>
      <h2 className="font-semibold text-base">{title}</h2>
      <ul className="list-disc pl-4">
        {descriptions.map((description, index) => (
          <li key={index} className="opacity-60">
            {description}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default MetadataItem;
