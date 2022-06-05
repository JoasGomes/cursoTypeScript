type VotationOption = {
  numberOfvotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const vontationOption of votation.votationOptions) {
        console.log(vontationOption.option, vontationOption.numberOfvotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('QUAL SUA LINGUAGEM DE PROGRAMAÇÃO FAVORITA?');
votation1.addVotationOption({ option: 'python', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'javaScrip', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'typeScript', numberOfvotes: 0 });
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);

const votation2 = new Votation('QUAL SUA COR FAVORITA?');
votation2.addVotationOption({ option: 'vermelho', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'verde', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'azul', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'roxo', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'cinza', numberOfvotes: 0 });
votation2.vote(0);
votation2.vote(0);
votation2.vote(0);
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
