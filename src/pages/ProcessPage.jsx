import React from "react";
import { siteContent } from "../content.js";
import { STYLES, GRADIENTS } from "../styles.js";
import { CheckCircle } from "lucide-react";

export const ProcessPage = () => (
  <div className={`min-h-screen ${STYLES.darkBg} ${STYLES.section}`}>
    <div className={STYLES.container}>
      <div className={`text-center ${STYLES.mb16}`}>
        <h1 className={STYLES.pageTitle}>{siteContent.process.title}</h1>
        <p className={STYLES.pageSubtitle}>{siteContent.process.subtitle}</p>
      </div>

      <div className="space-y-12">
        {siteContent.process.steps.map((step, index) => {
          const gradients = [GRADIENTS.step1, GRADIENTS.step2, GRADIENTS.step3];
          const isReverse = index % 2 === 1;

          return (
            <div
              key={index}
              className={
                isReverse ? STYLES.processStepReverse : STYLES.processStepNormal
              }
            >
              <div className="lg:w-1/2">
                <div
                  className={`bg-gradient-to-r ${gradients[index]} ${STYLES.processNumber}`}
                >
                  {step.number}
                </div>
                <h3 className={STYLES.cardTitleLarge}>{step.title}</h3>
                <p className={`${STYLES.textSlate300} text-lg leading-relaxed`}>
                  {step.description}
                </p>
              </div>
              <div className={`lg:w-1/2 ${STYLES.cardBg}`}>
                <div className={STYLES.processChecklist}>
                  {step.checklist.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle
                        className={`w-5 h-5 ${STYLES.textGreen400}`}
                      />
                      <span className={STYLES.textSlate300}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
