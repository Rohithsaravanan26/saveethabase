import { Resource } from "../types";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div>
      <strong>{resource.name}</strong>
    </div>
  );
}
