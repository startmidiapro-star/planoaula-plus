export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          PlanoAula+
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crie planos de aula alinhados à BNCC em minutos, não horas.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <p className="text-lg mb-4">🚀 <strong>Site em construção</strong></p>
          <p className="text-gray-600">
            Em breve: A ferramenta definitiva para professores criarem planos de aula 
            alinhados à BNCC de forma rápida e eficiente.
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              ⏳ Volte em breve para a versão completa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}