"use client";
import { notion } from "@/lib/notionClient";
import { useEffect } from "react";
import Section from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-col gap-4">
        {skillsArray.map((section, index) => {
          return (
            <div
              key={index}
              className="border p-4 rounded-lg flex flex-col gap-4 md:w-fit max-w-full "
            >
              <div className="font-bold text-lg">{section.sectionTitle}</div>
              <div className="flex flex-wrap items-center gap-8">
                {section.skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="min-h-20 min-w-20 hover:scale-125 transform transition duration-100 bg-white"
                    >
                      <img
                        alt={skill.title}
                        className="h-20 w-20 object-contain "
                        src={skill.img}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const skillsArray = [
  {
    sectionTitle: "Language",
    skills: [
      {
        title: "Python",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
      {
        title: "C++",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      },
      {
        title: "Go",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      },
    ],
  },
  {
    sectionTitle: "Databases",
    skills: [
      {
        title: "MySQL",
        img: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      },
      {
        title: "PostgreSQL",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      },
      {
        title: "Memcached",
        img: "https://static-00.iconduck.com/assets.00/memcached-icon-1024x1024-v0zz2vtd.png",
      },
      {
        title: "MongoDB",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MongoDB_Logo.png/1598px-MongoDB_Logo.png?20180423174357",
      },
      {
        title: "Redis",
        img: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
      },
      {
        title: "MemSQL",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/43/MemSQL_Logo.png",
      },
      {
        title: "Timescale",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULK6GxxLiT7w5454qlXebUfFEy5E1664wJQ&s",
      },
    ],
  },
  {
    sectionTitle: "Cloud",
    skills: [
      {
        title: "AWS",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        title: "GCP",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Google-cloud-platform.svg",
      },
    ],
  },
  {
    sectionTitle: "Frameworks",
    skills: [
      {
        title: "Django",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
      },
      {
        title: "Flask",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
      },
      {
        title: "FastAPI",
        img: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
      },
      {
        title: "Pandas",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
      },
      {
        title: "Numpy",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
      },
    ],
  },
  {
    sectionTitle: "Monitoring",
    skills: [
      {
        title: "NewRelic",
        img: "https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_vertical.png",
      },
      {
        title: "Grafana",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1024px-Grafana_logo.svg.png?20230113183101",
      },
      {
        title: "Prometheus",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg",
      },
      {
        title: "Datadog",
        img: "https://cdn.worldvectorlogo.com/logos/datadog.svg",
      },
    ],
  },
  {
    sectionTitle: "Tools",
    skills: [
      {
        title: "Tableau",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
      },
      {
        title: "Mixpanel",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mixpanel_full_logo_%E2%80%93_slate.png/1600px-Mixpanel_full_logo_%E2%80%93_slate.png?20201204155151",
      },
      {
        title: "JIRA",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/2560px-Jira_Logo.svg.png",
      },
      {
        title: "Excel",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
      },
    ],
  },
  {
    sectionTitle: "Deployment",
    skills: [
      {
        title: "Git",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      },
      {
        title: "Kubernetes",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      },
      {
        title: "Docker",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      },
      {
        title: "Kafka",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Apache_kafka_wordtype.svg/2560px-Apache_kafka_wordtype.svg.png",
      },
      {
        title: "Jenkins",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/452px-Jenkins_logo.svg.png?20120629215426",
      },
    ],
  },
  {
    sectionTitle: "Others",
    skills: [
      {
        title: "Agile",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3ucyJEw3IoCmaItKzIyft9A4Wzq748JZ1g&s",
      },
      {
        title: "Scrum",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum_process.svg",
      },

      {
        title: "Microservices",
        img: "https://www.felpfe.com/wp-content/uploads/sites/4/2023/08/1_KH-i7gZC9UEUELeMhnAugg.jpg",
      },
      {
        title: "REST APIs",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s",
      },
    ],
  },
];
