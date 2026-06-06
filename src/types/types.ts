export interface Menus {
    isOpen: boolean;
    children: React.ReactNode;
};

export type Props = React.FormHTMLAttributes<HTMLFormElement> & {
    children: React.ReactNode;
    isLogin?: boolean;
};

export type Cards = {
    imagem: string;
    alt: string;
    mecanica: string;
    endereco: string;
    telefone: string;
    cep: string;
    atendimento: string;
    observacao: string;
    link: string;
};

export const listaMecanicas:Cards[] = [
    { imagem: '/img/mecanicas/porto-barra-funda.jpg', alt: 'Centro Porto Barra Funda',
        mecanica: 'Porto Barra Funda', endereco: 'R QUIRINO DOS SANTOS, 230 - BARRA FUNDA - SAO PAULO', telefone: '(11) 3822-4481 / (11) 3366-7043',
        cep: '01141-020', atendimento: 'DE SEG. A SEX. DAS 08:00 ÀS 17:30, SÁB. DAS 08:00 ÀS 12:00, EXCETO DOM. E FERIADOS', observacao: 'CALIBRAGEM DE PNEU COM NITROGÊNIO PARA SEGURADOS GRATUITO.', link: 'https://centrosautomotivosportoseguro.campanhaporto.com.br/?utm_campaign=CE_divulg_centroauto&utm_source=interps_inst_link&utm_medium=own&utm_content=conhecamais' 
    },

    { imagem: '/img/mecanicas/porto-tatuape.jpeg', alt: 'Centro Porto Tatuape Tuiti',
        mecanica: 'Porto Tatuape Tuiti', endereco: 'R TUIUTI, 398 - TATUAPE - SAO PAULO - SP', telefone: '(11) 2092-4903',
        cep: '03081-015', atendimento: 'DE SEG. A SEX. DAS 08:00 ÀS 18:00, SÁB. DAS 08:00 ÀS 12:00, EXCETO DOM. E FERIADOS', observacao: 'REALIZA SERVIÇOS DE: INSULFILM E ACESSÓRIOS.', link: 'https://centrosautomotivosportoseguro.campanhaporto.com.br/?utm_campaign=CE_divulg_centroauto&utm_source=interps_inst_link&utm_medium=own&utm_content=conhecamais' 
    },

    { imagem: '/img/mecanicas/porto-vila-maria.jpeg', alt: 'Centro Porto Vila Maria',
        mecanica: 'Porto Vila Maria', endereco: 'AV ALBERTO BYNGTON, 1401 - VILA MARIA ALTA - SAO PAULO - SP', telefone: '(11) 2631-9360 / (11) 2631-9347',
        cep: '02127-001', atendimento: 'DE SEG. A SEX. DAS 08:00 ÀS 18:00, SÁB. DAS 08:00 ÀS 12:00, EXCETO DOM. E FERIADOS', observacao: 'REALIZA SERVIÇOS DE: INSULFILM, ANTI VANDALISMO, SENSOR DE RÉ, CÂMERA DE RÉ, MULTIMÍDIA, ENVELOPAMENTO DE TETO, DESBLOQUEIO DE MULTIMÍDIA, FLUÍDO DE FREIO. VIDRO E TRAVA ELÉTRICA.', link: 'https://centrosautomotivosportoseguro.campanhaporto.com.br/?utm_campaign=CE_divulg_centroauto&utm_source=interps_inst_link&utm_medium=own&utm_content=conhecamais' 
    },
];