import { Heading, List, Stack } from "@chakra-ui/react";
import ItemAcadedmicFormation from "./ItemAcadedmicFormation";

interface ListAcademicFormationProps {
    titleContainer: string;
}

export default function ListAcademicFormation({ titleContainer }: ListAcademicFormationProps) {
    return (
        <Stack>
            <Heading color='primary.900' fontSize={20}>{titleContainer.toUpperCase()}</Heading>

            <List spacing={3}>
                <ItemAcadedmicFormation legend="Front-end Developer React.js" academic="Rocketseat" date="01/2022 - 01/2023" />
                <ItemAcadedmicFormation legend="Full-Stack Developer" academic="Senac Lapa Tito" date="08/2020 - 12/2020" />
                <ItemAcadedmicFormation legend="Proprofissão" academic="Instituto Proa" date="07/2020 - 12/2020" />
                <ItemAcadedmicFormation legend="Ensino Médio" academic="Escola Beatriz de Quadros Leme" date="02/2017 - 12/2019" />
            </List>
        </Stack>
    )
}