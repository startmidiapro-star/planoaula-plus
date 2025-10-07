import Button from '@/components/ui/button';  // ✅ SEM { }

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
        
        {/* TESTE DO BOTÃO - IMPORTANTE */}
        <div className="flex gap-4 justify-center mb-8">
          <Button>Botão Primário</Button>
          <Button style={{ backgroundColor: '#10b981' }}>
            Botão Verde
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <p className="text-lg mb-4">✅ <strong>Primeiro Componente Criado!</strong></p>
          <p className="text-gray-600">
            O componente Button está funcionando! Próximo passo: Input e Formulário.
          </p>
        </div>
      </div>
    </div>
  );
}