// @ts-nocheck
import { JobRunner, Job } from "./jobRunner";

describe("JobRunner", () => {
  beforeEach(() => {});

  it("should run jobs", () => {
    const max = 10000;
    const jobRunner = new JobRunner();
    for (let i = 0; i < max; i++) {
      const priority = Math.floor(Math.random() * (max + 1));
      const job = new Job(priority);
      jobRunner.addJob(job);
    }

    jobRunner.process();
  });
});
