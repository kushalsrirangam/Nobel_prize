import React, { useEffect, useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

const PowerBiPOC = () => {
  const [reportConfig, setReportConfig] = useState<models.IReportEmbedConfiguration>({
    type: "report",
    embedUrl: "", // Will be populated after the report is loaded
    accessToken: "", // Will be populated after the token is fetched
    id: "", // Report ID
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: true,
        },
      },
      background: models.BackgroundType.Transparent,
    },
  });

  useEffect(() => {
    // Example: Fetching the Embed URL and Token (replace with actual API call)
    fetch("/api/getPowerBIDetails")
      .then((res) => res.json())
      .then((data) => {
        setReportConfig({
          embedUrl: data.embedUrl, // The embed URL from Power BI Service
          accessToken: data.accessToken, // The embed token you generated from Power BI API
          id: data.reportId, // The report ID from Power BI Service
          type: "report",
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: true,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching Power BI details:", error);
      });
  }, []);

  return (
    <div>
      <h2>Power BI Embed</h2>
      {/* Embed the report using PowerBIEmbed component */}
      <PowerBIEmbed
        embedConfig={reportConfig}
        cssClassName="power-bi-report-class"
      />
    </div>
  );
};

export default PowerBiPOC;
