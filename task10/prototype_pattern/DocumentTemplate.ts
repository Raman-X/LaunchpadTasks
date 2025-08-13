export class DocumentTemplate {
  constructor(
    public title: string,
    public content: string,
    public footer: string
  ) {}

  // Prototype's clone method
  public clone(): DocumentTemplate {
    // Simple way: return a new object with the same values
    return new DocumentTemplate(this.title, this.content, this.footer);
  }
}
