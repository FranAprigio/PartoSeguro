import React from "react";
import { BackgroundComponent } from "../../../components/micros";
import { View, StyleSheet } from "react-native";
import SearchInput from "../../../components/search";

export const LinksUteis = () => {
    const data = [
        { pagina: "Cartilha Parto Seguro", nav: "http://www.mpgo.mp.br/portal/conteudo/cartilha-parto-seguro" },
        { pagina: "Violência Obstétrica não se cale", nav: "https://www.naosecale.ms.gov.br/violencia-obstetrica/" },
        { pagina: "Rede de Atenção Materno Infantil", nav: "https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-715-de-4-de-abril-de-2022-391070559" },
        { pagina: "Direito à presença da Doula – Rio de Janeiro", nav: "http://www3.alerj.rj.gov.br/lotus_notes/default.asp?id=7&url=L3NjcHJvMTUxOS5uc2YvMThjMWRkNjhmOTZiZTNlNzgzMjU2NmVjMDAxOGQ4MzMvN2UxNTQwMjFmNmEyYmRmZjgzMjU4MmRkMDA0YmVkZjc/T3BlbkRvY3VtZW50#:~:text=%C2%A7%204%C2%B0%20%2D%20A%20presen%C3%A7a,que%20n%C3%A3o%20seja%20parto%20normal." },
        { pagina: "Direito ao Conhecimento e Vinculação à Maternidade", nav: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11634.htm#:~:text=Art.,casos%20de%20intercorr%C3%AAncia%20pr%C3%A9%2Dnatal." },
        { pagina: "Código de Ética Médica", nav: "https://portal.cfm.org.br/images/PDF/cem2019.pdf" },
        { pagina: "Lei do Acompanhante", nav: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11108.htm#:~:text=LEI%20N%C2%BA%2011.108%2C%20DE%207%20DE%20ABRIL%20DE%202005.&text=Altera%20a%20Lei%20n%C2%BA%208.080,Sistema%20%C3%9Anico%20de%20Sa%C3%BAde%20%2D%20SUS." },
        { pagina: "Rede Cegonha", nav: "https://aps.saude.gov.br/smp/smprasredecegonha" },
        { pagina: "Ouvidoria SUS", nav: "https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus" },
        { pagina: "Reclamação ANS", nav: "https://www.gov.br/pt-br/servicos/receber-reclamacoes-sobre-possiveis-praticas-irregulares-de-operadoras-de-planos-privados-de-assistencia-a-saude-inclusive-administradoras-de-beneficios" },
    ];

    return (
        <BackgroundComponent colors={['#FCCCD4', '#FCE5BF', '#E3C3B9']}>
            <View style={styles.body}>
                <SearchInput data={data} isOutLink={true} />
            </View>
        </BackgroundComponent>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        padding: 30,
        marginTop: 70,
    }
});
