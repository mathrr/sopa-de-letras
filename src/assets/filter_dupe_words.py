def ler_arquivo(arquivo):
  conjuntos_de_letras = []
  try:
    with open(arquivo, "r") as f:
      for linha in f:
        palavra = linha.strip()
        conjunto_de_letras = set(palavra)
        conjunto_de_letras = sorted(conjunto_de_letras)
        conjuntos_de_letras.append(conjunto_de_letras)
  except FileNotFoundError:
    print(f"Arquivo '{arquivo}' não encontrado")
  return conjuntos_de_letras


def main():
  arquivo = "C:\Users\28795\Downloads\VueCourse\sopa-de-letras\src\assets\filter_dupe_words.py"
  conjuntos_de_letras = ler_arquivo(arquivo)
  conjuntos_de_letras = list(set(conjuntos_de_letras))

  arquivo_saida = "no_dupe_letters_100.txt"
  with open(arquivo_saida, "w") as f:
    for conjunto_de_letras in conjuntos_de_letras:
      f.write("".join(conjunto_de_letras) + "\n")


if __name__ == "__main__":
  main()
