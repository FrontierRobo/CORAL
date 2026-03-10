export const CORAL = {
  titleLine1: "CORAL: Scalable Multi-Task Robot Learning",
  titleLine2: "via LoRA Experts",
  authors: "Yuankai Luo, Woping Chen, Tong Liang, Zhenguo Li",
  tagline:
    "A backbone- and embodiment-agnostic framework that resolves multi-task interference in VLA deployment through strict parameter isolation via LoRA experts.",
  abstract:
    "Deploying Vision-Language-Action (VLA) models in real-world robotics exposes a core multi-task learning challenge: reconciling task interference in multi-task robotic learning. When multiple tasks are jointly fine-tuned in a single stage, gradients from different tasks can conflict, causing negative transfer and reducing per-task performance. Yet maintaining a separate full checkpoint per task is often storage- and deployment-prohibitive.\n\nTo address this dilemma, we present CORAL, a backbone- and embodiment-agnostic framework designed primarily to mitigate multi-task interference while remaining naturally extensible to a continuous stream of new tasks. CORAL freezes a single pre-trained VLA backbone and attaches one lightweight Low-Rank Adaptation (LoRA) expert per task; at runtime, a dynamic inference engine—the CORAL Manager—routes language instructions to the appropriate expert and swaps experts on the fly with zero inference overhead. This strict parameter isolation avoids complex gating networks and prevents parameter-level cross-task interference by construction; as an added capability, it also enables sequentially introducing new tasks without parameter overwriting caused by catastrophic forgetting.\n\nWe validate CORAL on a real-world Galaxea R1 dual-arm mobile manipulator and three simulation benchmarks (LIBERO, WidowX, Google Robot), where CORAL overcomes fine-grained instructional ambiguity and substantially outperforms joint training, yielding a practical and scalable system for lifelong multi-task robot learning.",
  contributions: [
    {
      title: "A Scalable System for Lifelong Robot Learning",
      content:
        "We propose CORAL, a backbone- and embodiment-agnostic solution that resolves the persistent conflicts between generalization, specialization, and scaling efficiency in real-world VLA deployment.",
      icon: "cube",
      color: "indigo",
    },
    {
      title: "Multi-Task Scaling without Interference",
      content:
        "By routing distinct tasks to dedicated, strictly isolated task experts, CORAL resolves fine-grained instructional ambiguity to significantly outperform joint fine-tuning. Because experts are disjoint, the framework inherently avoids interference across experts by construction.",
      icon: "chart-bar",
      color: "emerald",
    },
    {
      title: "Breaking the Storage Barrier",
      content:
        "A single expert can be trained using only task-specific demonstrations and achieves performance comparable to full fine-tuning, while being hundreds of times smaller than a full model—leaving substantial capacity for adaptation to new tasks.",
      icon: "database",
      color: "amber",
    },
  ],
  figures: {
    overview: {
      src: "/coral/CORAL_12.png",
      width: 1200,
      height: 600,
      alt: "System Overview of CORAL.",
      caption:
        "System Overview of CORAL. The framework consists of a frozen pre-trained Vision-Language-Action (VLA) backbone and an expandable library of lightweight, task-specific LoRA experts. By leveraging the language instruction as task router index, the CORAL Manager dynamically loads the corresponding expert on the fly. This enables zero inference overhead, scalable multi-task learning for lifelong robot deployment.",
    },
    zeroShot: {
      src: "/coral/zero_shot_generalization.png",
      width: 1200,
      height: 700,
      alt: "Cross-Scene Zero-Shot Generalization Results.",
      caption:
        "Cross-Scene Zero-Shot Generalization Results. Success rates (%) on 8 complex real-world tasks in unseen environments. CORAL significantly enhances the base model's cross-scene robustness by activating task-specific LoRA experts, mitigating multi-task interference.",
    },
    realWorld: {
      src: "/coral/real.png",
      width: 1200,
      height: 800,
      alt: "Real-World Evaluation Tasks.",
      caption:
        "Fig. 4. Real-World Evaluation Tasks. Real-time inference trajectories successfully executed by CORAL\u2009(SimVLA) during new capability acquisition.",
    },
    newCapability: {
      src: "/coral/new_capability.png",
      width: 1200,
      height: 600,
      alt: "New Capability Acquisition Results.",
      caption:
        "Fig. 3. New Capability Acquisition Results. Success rates (%) on completely unseen, out-of-domain tasks (left). Storage footprint (right).",
    },
    tableLibero: {
      src: "/coral/table_libero.png",
      width: 900,
      height: 400,
      alt: "Comparison on the LIBERO benchmark.",
      caption:
        "Table I. Comparison on the LIBERO benchmark. Success rates (%) on the official test episodes for each suite (Spatial / Object / Goal / Long). Bold* denotes best performance.",
    },
    tableWidowx: {
      src: "/coral/table_widowx.png",
      width: 900,
      height: 400,
      alt: "Comparison on WidowX robot tasks.",
      caption:
        "Table II. Comparison on WidowX robot tasks. Success rates (%) across representative WidowX manipulation tasks.",
    },
    tableGoogle: {
      src: "/coral/table_google.png",
      width: 900,
      height: 400,
      alt: "Comparison on Google Robot tasks.",
      caption:
        "Table III. Comparison on Google Robot tasks. Success rates (%) on variant aggregation scores.",
    },
  },
  results: {
    libero: {
      title: "LIBERO Benchmark",
      description:
        "CORAL establishes a definitive new state-of-the-art on the LIBERO benchmark. When applied to SimVLA, it achieves an unprecedented 99.3% overall average success rate, decisively outperforming heavily pre-trained baselines like X-VLA. Furthermore, integrating CORAL with π0.5 yields a remarkable 98.4% success rate, delivering a significant +1.5% absolute improvement over the standard π0.5 model, particularly excelling on the most challenging long-horizon tasks.",
      highlights: [
        { label: "CORAL_SimVLA (Avg)", value: "99.3%", delta: "+0.7%" },
        { label: "CORAL_π0.5 (Avg)", value: "98.4%", delta: "+1.5%" },
        { label: "LIBERO-Long gain (π0.5)", value: "95.8%", delta: "+3.4%" },
      ],
    },
    widowx: {
      title: "WidowX Robot Tasks",
      description:
        "Demonstrating exceptional real-to-sim transfer capabilities in high-fidelity simulated environments, CORAL achieves a staggering 97.9% average success rate on the Simpler-Bridge (WidowX) tasks. It completely dominates large-scale baseline models, flawlessly executing tasks like Spoon and Carrot with a perfect 100% success rate.",
      highlights: [
        { label: "CORAL_SimVLA (Avg)", value: "97.9%", delta: "+2.1%" },
        { label: "Spoon & Carrot tasks", value: "100%", delta: "" },
      ],
    },
    google: {
      title: "Google Robot Tasks",
      description:
        "On the highly demanding Simpler-Fractal (Google Robot) benchmark, CORAL reaches an impressive 84.9% average success rate across diverse variant aggregation scores. It exhibits exceptional robustness, significantly surpassing previous leading models like X-VLA and RT-2-X by substantial margins.",
      highlights: [
        { label: "CORAL_SimVLA (Avg)", value: "84.9%", delta: "" },
      ],
    },
  },
  method: {
    title: "Method",
    intro:
      "The CORAL pipeline consists of two training stages followed by a dynamic inference engine. First, we perform embodiment-aware general pre-training to build a frozen base model that captures broad control patterns and visual-linguistic grounding. Second, for each task we fine-tune a lightweight, task-specific LoRA expert while keeping the base model completely frozen. During inference, the CORAL Manager dynamically swaps these compact LoRA experts on the fly, enabling scalable multi-task deployment with zero additional inference overhead.",
    stages: [
      {
        title: "Embodiment-Aware General Pre-training",
        icon: "database",
        color: "blue",
        content:
          "We first train or fine-tune the base policy model on diverse data spanning all available initial tasks. This phase allows the model to deeply understand the robot's general control patterns, kinematics, and the common visual-linguistic structure of the environment. The resulting base model is then frozen permanently, serving as a shared foundation upon which all lightweight, task-specific LoRA experts are built.",
      },
      {
        title: "Lightweight Task-Specific LoRA Experts",
        icon: "lightning-bolt",
        color: "emerald",
        content:
          "For each task—both initial and newly emerging ones—we train an independent, lightweight LoRA expert while keeping the base model completely frozen. Training is kept intentionally brief (limited to a small number of optimization steps), acting as a gentle implicit regularization that prevents overfitting and ensures the expert enhances task-specific success rates without degrading broad generalization inherited from the base model.",
      },
      {
        title: "Dynamic Expert Routing (CORAL Manager)",
        icon: "cube",
        color: "amber",
        content:
          "At inference time, the CORAL Manager handles dynamic loading, switching, and unloading of LoRA experts on a single frozen base model. Unlike standard Mixture-of-Experts architectures with learned routing networks, CORAL exploits that each language instruction inherently identifies its task, enabling explicit routing without gating complexity. The entire expert switching procedure completes within 100 ms with zero additional inference overhead.",
        algorithmImage: "/coral/algorithm.png",
      },
    ],
  },
  bibtex: `@article{luo2026coral,
  title={CORAL: Scalable Multi-Task Robot Learning via LoRA Experts},
  author={Luo, Yuankai and Chen, Woping and Liang, Tong and Li, Zhenguo},
  journal={arXiv preprint arXiv:2602.18224},
  year={2026}
}`,
} as const;
