import React from "react";

interface IProps {
  description?: string;
}

const TaskDescriptionSection: React.FC<IProps> = ({ description }) => {
  const raw = description?.trim() ?? "";

  if (!raw) {
    return (
      <section className="space-y-3">
        <h2 className="text-size-md font-semibold text-secondary-foreground">
          Description
        </h2>
        <p className="text-size-sm text-tertiary-foreground italic leading-relaxed">
          No description provided.
        </p>
      </section>
    );
  }

  const parts = raw.split(/Acceptance Criteria:?/i);
  const mainPart = parts[0]?.trim() ?? "";
  const criteriaPart = parts[1]?.trim();

  return (
    <section className="space-y-4 border-y border-secondary-background py-7 px-2 sm:px-7">
      <h2 className="text-size-md font-semibold text-secondary-foreground">
        Description
      </h2>
      {mainPart ? (
        <p className="whitespace-pre-wrap text-size-sm text-secondary-foreground leading-[1.65]">
          {mainPart}
        </p>
      ) : null}
      {criteriaPart ? (
        <>
          <h3 className="text-size-sm font-semibold text-secondary-foreground pt-1">
            Acceptance Criteria
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-size-sm text-secondary-foreground leading-relaxed marker:font-medium marker:text-tertiary-foreground">
            {criteriaPart
              .split(/\n/)
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line, i) => (
                <li key={i} className="pl-1">
                  {line.replace(/^\d+[\.)]\s*/, "").trim()}
                </li>
              ))}
          </ol>
        </>
      ) : null}
    </section>
  );
};

export default TaskDescriptionSection;
