import React, { useState } from "react";

const ConfiguracaoSeparacao: React.FC = () => {
  // Estado para controlar a seleção no dropdown
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>("");

  // Função para manipular a alteração no dropdown
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Configuração de Envio para Separação</h1>

      {/* Dropdown para selecionar a opção */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Selecione o modo de envio para separação:</strong>
          <select
            value={opcaoSelecionada}
            onChange={handleSelectChange}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="">Selecione uma opção</option>
            <option value="autorizarNotaFiscal">Autorizar nota fiscal</option>
            <option value="salvarNotaFiscal">Salvar nota fiscal</option>
            <option value="manual">Manual</option>
          </select>
        </label>
      </div>

      {/* Instruções com base na seleção */}
      {opcaoSelecionada === "autorizarNotaFiscal" && (
        <div style={{ marginLeft: "20px" }}>
          <p>
            Configurações necessárias:
            <br />
            <strong>
              Configurações → Vendas → Configurações de separação → Enviar para
              separação ao autorizar nota fiscal
            </strong>
          </p>
        </div>
      )}

      {opcaoSelecionada === "salvarNotaFiscal" && (
        <div style={{ marginLeft: "20px" }}>
          <p>
            Configurações necessárias:
            <br />
            <strong>
              Configurações → Vendas → Configurações de separação → Enviar para
              separação ao salvar nota fiscal
            </strong>
          </p>
        </div>
      )}

      {opcaoSelecionada === "manual" && (
        <div style={{ marginLeft: "20px" }}>
          <p>
            Configurações necessárias:
            <br />
            <strong>
              Configurações → Vendas → Configurações de separação → Enviar
              manualmente para separação
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ConfiguracaoSeparacao;
