const objetoA: {
  readonly chaveZ: string; //valor não poderá ser mudado
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveZ: 'não pode ser mudado',
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'outro valor';
objetoA.chaveC = 'nova chave';
objetoA.chaveD = 'NOVA CHAVE';
