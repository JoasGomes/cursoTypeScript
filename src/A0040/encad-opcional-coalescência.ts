//encadeamento opcional e op.de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'o titulo',
  texto: 'o texto',
  //data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'ixi,não existe data.');
console.log(undefined ?? '2.ixi,não existe data.');
console.log(null ?? '3.ixi,não existe data.');
console.log(false ?? '3.ixi,não existe data.');
console.log(0 ?? '3.ixi,não existe data.');
console.log('' ?? '3.ixi,não existe data.');
