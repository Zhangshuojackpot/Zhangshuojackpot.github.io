(function () {
  "use strict";

  var I18N = {
    zh: {
      "brand.name": "张铄",
      "meta.title": "张铄 | 湖南大学 · 人工智能先进制造研究院",
      "meta.description": "张铄（Shuo Zhang），湖南大学人工智能先进制造研究院助理教授、博士生导师。研究方向：不完美数据驱动学习算法、生理信号智能分析与可穿戴医疗、非接触式生理信号采集与分析。",
      "hero.name": "张铄",
      "hero.title": "助理教授 · 博士生导师",
      "hero.affil": "湖南大学 人工智能先进制造研究院",
      "hero.field": "学科：计算机科学与技术、电子信息",
      "recruit.badge": "2027 招生",
      "recruit.title": "招生信息",
      "recruit.lead": "2027 年招收博士研究生 1 名、硕士研究生 2 名。",
      "recruit.benefitTitle": "如果你成为我的学生，你将得到：",
      "recruit.warn": "仅为拿文凭、混学历而来的同学请勿打扰。",
      "recruit.reqLabel": "招生要求",
      "recruit.note": "培养说明：一线亲力亲为，已指导多名学生发表高水平顶刊/顶会论文。",
      "recruit.contactLabel": "联系邮箱：",
      "about.title": "个人简介",
      "about.body": "张铄，湖南大学人工智能先进制造研究院助理教授、博士生导师，牛津大学博士后。其研究沿两条主线展开：一是数据驱动算法本身，聚焦标签噪声学习、长尾识别、多标签分类等深度学习中的共性瓶颈，在“不完美数据驱动下的算法设计”领域取得关键技术突破；二是算法在医疗健康中的应用，重点面向心电、心音、脑电等生理信号处理与智能穿戴医疗系统。以第一作者身份在 TPAMI、CVPR、AAAI、KBS 等领域顶级期刊/会议发表多篇成果，参与多项国家级、省部级项目研究，并多次受邀在行业年会作报告。",
      "research.title": "研究方向",
      "pubs.title": "代表性论文",
      "pubs.more": "完整论文列表 → Google Scholar",
      "exp.title": "学习与工作经历",
      "pa.title": "专利与获奖",
      "pa.patents": "专利",
      "pa.awards": "获奖",
      "footer.copy": "© 2026 张铄 · Shuo Zhang",
      "footer.update": "最后更新：2026 年 11 月"
    },
    en: {
      "brand.name": "Shuo Zhang",
      "meta.title": "Shuo Zhang | Hunan University · Institute for AI & Advanced Manufacturing",
      "meta.description": "Shuo Zhang, Assistant Professor and Doctoral Supervisor at the Institute for AI & Advanced Manufacturing, Hunan University. Research: learning under imperfect data, physiological signal analysis & wearable healthcare, and non-contact physiological signal acquisition.",
      "hero.name": "Shuo Zhang",
      "hero.title": "Assistant Professor · Doctoral Supervisor",
      "hero.affil": "Institute for AI & Advanced Manufacturing, Hunan University",
      "hero.field": "Disciplines: Computer Science and Technology, Electronic Information",
      "recruit.badge": "Recruiting 2027",
      "recruit.title": "Openings",
      "recruit.lead": "Recruiting 1 PhD and 2 Master's students for 2027.",
      "recruit.benefitTitle": "If you become my student, you will get:",
      "recruit.warn": "Please do not apply if your only goal is to obtain a degree.",
      "recruit.reqLabel": "Requirements",
      "recruit.note": "Mentorship: hands-on supervision; has guided multiple students to publish papers in top journals and top-tier conferences.",
      "recruit.contactLabel": "Contact: ",
      "about.title": "About",
      "about.body": "Shuo Zhang is an Assistant Professor and Doctoral Supervisor at the Institute for AI & Advanced Manufacturing, Hunan University, and a former Postdoctoral Researcher at the University of Oxford. His research follows two main lines: one addresses data-driven algorithms themselves, tackling common bottlenecks in deep learning such as learning with noisy labels, long-tailed recognition and multi-label classification, with key breakthroughs in algorithm design under imperfect data; the other applies these methods to healthcare, with a focus on physiological signal processing (ECG, heart sound, EEG) and intelligent wearable medical systems. He has published first-author papers in leading venues such as TPAMI, CVPR, AAAI and KBS, contributed to multiple national and provincial research projects, and been invited to speak at industry conferences.",
      "research.title": "Research Interests",
      "pubs.title": "Selected Publications",
      "pubs.more": "Full publication list → Google Scholar",
      "exp.title": "Education & Experience",
      "pa.title": "Patents & Awards",
      "pa.patents": "Patents",
      "pa.awards": "Awards",
      "footer.copy": "© 2026 Shuo Zhang",
      "footer.update": "Last updated: November 2026"
    }
  };

  var RECRUIT_REQS = [
    { zh: "踏实、兴趣驱动，对科研有持续热情。", en: "Self-motivated, persistent, and genuinely passionate about research." },
    { zh: "欢迎计算机、生物医学工程、电子信息、人工智能等相关背景。", en: "Backgrounds in computer science, biomedical engineering, electronic information, AI, or related fields are welcome." },
    { zh: "有高水平文章发表、或硬件系统设计经历者优先考虑。", en: "Priority is given to candidates with strong publications or hardware system design experience." }
  ];

  var BENEFITS = [
    { zh: "一位沉下心来做科研，讲公平，讲道理的老师；", en: "A supervisor who is dedicated to research and is fair and reasonable;" },
    { zh: "一个良好的实验室氛围；", en: "A positive and collaborative lab environment;" },
    { zh: "对表现优秀的学生，我会尽力推荐至牛津大学、新加坡国立大学、东南大学、哈尔滨工业大学等海内外知名高校继续深造，或推荐至华为、字节跳动等大厂工作；", en: "For outstanding students, I will do my best to recommend them for further study at renowned universities such as the University of Oxford, the National University of Singapore, Southeast University and Harbin Institute of Technology, or for positions at leading companies such as HUAWEI and ByteDance." }
  ];

  var RESEARCH = [
    {
      zh: "不完美数据驱动的学习算法",
      en: "Learning Algorithms under Imperfect Data",
      descZh: "聚焦标签噪声、长尾分布与多标签分类等不完美数据场景下的算法设计。",
      descEn: "Algorithm design under imperfect data, including learning with noisy labels, long-tailed recognition, and multi-label classification."
    },
    {
      zh: "生理信号智能分析与可穿戴医疗",
      en: "Physiological Signal Analysis & Wearable Healthcare",
      descZh: "面向心电、心音、脑电等生理信号的智能分析方法与可穿戴医疗系统。",
      descEn: "Intelligent analysis of ECG, heart-sound and EEG signals, and wearable healthcare systems."
    },
    {
      zh: "非接触式生理信号采集与分析",
      en: "Non-contact Physiological Signal Acquisition & Analysis",
      descZh: "面向无接触应用场景的生理信号获取与智能分析方法。",
      descEn: "Acquisition and intelligent analysis of physiological signals in non-contact scenarios."
    }
  ];

  var PUBLICATIONS = [
    {
      authors: "S. Zhang, C. Li, T. Zhu",
      title: "Why Not Hyperparameter-Friendly Optimisation? A Monotonic Adaptive Norm Rescaling Approach for Long-Tailed Recognition",
      venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2026,
      tags: [{ zh: "CCF-A", en: "CCF-A" }]
    },
    {
      authors: "S. Zhang, J. Li, H. Fujita, et al.",
      title: "Student loss: Towards the probability assumption in inaccurate supervision",
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
      year: 2024,
      tags: [{ zh: "中科院一区 TOP · IF 20.8", en: "CAS Zone 1 TOP · IF 20.8" }]
    },
    {
      authors: "S. Zhang, Y. Li, Z. Wang, et al.",
      title: "Learning with noisy labels using hyperspherical margin weighting",
      venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI)",
      year: 2024,
      tags: [{ zh: "CCF-A", en: "CCF-A" }]
    },
    {
      authors: "S. Zhang, Y. Li, X. Wang, et al.",
      title: "Label decoupling strategy for 12-lead ECG classification",
      venue: "Knowledge-Based Systems (KBS)",
      year: 2023,
      tags: [{ zh: "中科院一区 TOP · IF 8.8", en: "CAS Zone 1 TOP · IF 8.8" }]
    },
    {
      authors: "C. Li, Y. Liu, S. Zhang, T. Denison, T. Zhu",
      title: "Standing on the Shoulders of Giants: Rethinking EEG Foundation Model Pretraining via Multi-Teacher Distillation",
      venue: "Advances in Neural Information Processing Systems (NeurIPS)",
      year: 2026,
      tags: [{ zh: "CCF-A", en: "CCF-A" }]
    },
    {
      authors: "X. Li, S. Yan, X. Wu, Q. Miao, D. Zhang, W. Mai, S. Han, Z. Tang, M. Ye, S. Zhang, et al.",
      title: "Pericytes promote metastasis by regulating tumor local vascular tone and hemodynamics",
      venue: "Nature Communications (NC)",
      year: 2025,
      tags: [{ zh: "中科院一区 TOP · IF 15.7", en: "CAS Zone 1 TOP · IF 15.7" }]
    },
    {
      authors: "Z. Wang, C. Ma, S. Zhang, M. Zhao, Y. Liu, L. Zhao, T. Zhu, J. Li, C. Liu",
      title: "Multi-teacher self-distillation based on adaptive weighting and activation pattern for enhancing lightweight arrhythmia recognition",
      venue: "Information Fusion",
      year: 2025,
      tags: [{ zh: "中科院一区 TOP · IF 15.5", en: "CAS Zone 1 TOP · IF 15.5" }]
    }
  ];

  var TIMELINE = [
    { start: "2026.11", endZh: "至今", endEn: "Present", zh: { org: "湖南大学 人工智能先进制造研究院", role: "助理教授、博士生导师" }, en: { org: "Hunan University, Institute for AI & Advanced Manufacturing", role: "Assistant Professor, Doctoral Supervisor" } },
    { start: "2025.06", endZh: "2026.09", endEn: "2026.09", zh: { org: "牛津大学", role: "博士后" }, en: { org: "University of Oxford", role: "Postdoctoral Researcher" } },
    { start: "2020.09", endZh: "2024.09", endEn: "2024.09", zh: { org: "东南大学", role: "博士" }, en: { org: "Southeast University", role: "PhD" } },
    { start: "2017.09", endZh: "2020.07", endEn: "2020.07", zh: { org: "中国医科大学", role: "硕士" }, en: { org: "China Medical University", role: "MSc" } },
    { start: "2013.09", endZh: "2017.07", endEn: "2017.07", zh: { org: "南方医科大学", role: "本科" }, en: { org: "Southern Medical University", role: "BSc" } }
  ];

  var PATENTS = [
    { zh: "智能静脉输液器装置 · 授权号 CN107320815B", en: "Intelligent intravenous infusion device · Patent No. CN107320815B" },
    { zh: "用于小儿肺炎监护的肺音听诊器 · 授权号 CN209966411U", en: "Lung-sound stethoscope for pediatric pneumonia monitoring · Patent No. CN209966411U" }
  ];

  var AWARDS = [
    { zh: "华为 DigiX 极客人工智能校园创新大赛 全国冠军（奖金 10 万元）", en: "National Champion, HUAWEI DigiX Geek AI Campus Innovation Contest (¥100,000 prize)" },
    { zh: "第九届“华为杯”中国大学生智能设计竞赛 一等奖", en: "First Prize, 9th “HUAWEI Cup” China University Students Intelligent Design Competition" },
    { zh: "第二届中国 AI+ 创新创业大赛总决赛 一等奖", en: "First Prize (Finals), 2nd China AI+ Innovation & Entrepreneurship Competition" },
    { zh: "华为开发者专家（HDE）", en: "HUAWEI Developer Expert (HDE)" }
  ];

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderList(id, items, lang) {
    var el = document.getElementById(id);
    if (!el) return;
    var html = items.map(function (it) {
      return "<li>" + esc(it[lang]) + "</li>";
    }).join("");
    el.innerHTML = html;
  }

  function renderResearch(lang) {
    var el = document.getElementById("research-list");
    if (!el) return;
    el.innerHTML = RESEARCH.map(function (it) {
      return '<div class="research-item"><h3>' + esc(it[lang]) + "</h3><p>" + esc(it["desc" + (lang === "zh" ? "Zh" : "En")]) + "</p></div>";
    }).join("");
  }

  function renderPubs(lang) {
    var el = document.getElementById("pubs-list");
    if (!el) return;
    el.innerHTML = PUBLICATIONS.map(function (p) {
      var tags = p.tags.map(function (t) {
        return '<span class="pub-tag">' + esc(t[lang]) + "</span>";
      }).join("");
      return (
        "<li>" +
        '<div class="pub-title">' + esc(p.title) + "</div>" +
        '<div class="pub-meta">' + esc(p.authors) + " · " + esc(p.venue) + ' · <span class="pub-year">' + p.year + "</span></div>" +
        '<div class="pub-tags">' + tags + "</div>" +
        "</li>"
      );
    }).join("");
  }

  function renderTimeline(lang) {
    var el = document.getElementById("exp-list");
    if (!el) return;
    el.innerHTML = TIMELINE.map(function (it) {
      var end = lang === "zh" ? it.endZh : it.endEn;
      var d = it[lang];
      return (
        "<li>" +
        '<div class="tl-time">' + esc(it.start) + " — " + esc(end) + "</div>" +
        '<div class="tl-org">' + esc(d.org) + "</div>" +
        '<div class="tl-role">' + esc(d.role) + "</div>" +
        "</li>"
      );
    }).join("");
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    var dict = I18N[lang];
    document.title = dict["meta.title"];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);
    var nodes = document.querySelectorAll("[data-i18n]");
    Array.prototype.forEach.call(nodes, function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key] != null) node.textContent = dict[key];
    });
    renderList("recruit-list", RECRUIT_REQS, lang);
    renderList("benefit-list", BENEFITS, lang);
    renderResearch(lang);
    renderPubs(lang);
    renderTimeline(lang);
    renderList("patents-list", PATENTS, lang);
    renderList("awards-list", AWARDS, lang);

    var zhBtn = document.getElementById("lang-zh");
    var enBtn = document.getElementById("lang-en");
    if (zhBtn) zhBtn.classList.toggle("is-active", lang === "zh");
    if (enBtn) enBtn.classList.toggle("is-active", lang === "en");
  }

  document.getElementById("lang-zh").addEventListener("click", function () { applyLang("zh"); });
  document.getElementById("lang-en").addEventListener("click", function () { applyLang("en"); });

  applyLang("zh");
})();