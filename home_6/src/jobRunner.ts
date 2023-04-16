import { PriorityQueue } from "./priorityQueue";

export interface IJob {
  getPriority(): number;
  run(): void;
}

export class Job implements IJob {
  private priority: number;
  constructor(priority: number) {
    this.priority = priority;
  }

  getPriority(): number {
    return this.priority;
  }
  run(): void {
    console.log("Priority: " + this.getPriority());
  }
}

export class JobRunner {
  queue = new PriorityQueue<Job>();

  addJob(job: Job): void {
    this.queue.enqueue(job, job.getPriority());
  }

  process(): void {
    while (!this.queue.isEmpty()) {
      const job = this.queue.dequeue().val;
      job.run();
    }
  }
}
