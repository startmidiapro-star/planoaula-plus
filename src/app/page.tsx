import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            PlanoAula+
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Crie planos de aula alinhados à BNCC em minutos.
          </p>
        </div>

        {/* TESTE DOS NOVOS COMPONENTES */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Teste de Componentes</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome completo
              </label>
              <Input placeholder="Digite seu nome" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input type="email" placeholder="seu@email.com" />
            </div>

            <div className="flex gap-2 pt-2">
              <Button>Enviar</Button>
              <Button style={{ backgroundColor: '#6b7280' }}>Cancelar</Button>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-8 text-center text-sm text-gray-500">
          <p>✅ Input criado com sucesso! Próximo: Textarea</p>
        </div>
      </div>
    </div>
  );
}