import React from 'react';
import { Wrapper, Content, Bullet, Section } from './styles';
import { Text, Title, Subtitle} from '../index';

export const Control = () => (
    <div id="bekämpfung">
        <Wrapper id="methode">
            <Content>
                    <Title>Bekämpfungsmethode</Title>
                <Section>
                    <Text>Die Grundlagen für eine ökologisch sinnvolle und wirksame Bekämpfung der Entwicklungsstadien der Stechmücken sind:</Text>
                    <Bullet>
                        <Subtitle>1. Expertise</Subtitle>
                        <Text>Ausreichende Kenntnisse der Biologie und Ökologie der plageerregenden Stechmücken, um gezielt gegen sie vorgehen zu können.</Text>
                    </Bullet>
                    <Bullet>
                        <Subtitle>2. Nachhaltigkeit</Subtitle>
                        <Text>Entwicklung von umweltverträglichen Bekämpfungsmethoden und Applikationstechniken, so dass den vielfältigen Wechselbeziehungen in einem sensiblen Ökosystem Rechnung getragen wird.</Text>
                    </Bullet>
                    <Bullet>
                        <Subtitle>3. Kartierung</Subtitle>
                        <Text>Eine exakte kartografische Erfassung und Katalogisierung der Brutplätze, um eine Grundlage für die Erarbeitung der Bekämpfungsstrategie, den rechtzeitigen Vollzug der Bekämpfung und die Kommunikation mit dem Bekämpfungspersonal während der Maßnahmen zu haben. Bei der Kartierung müssen neben dem Vorkommen der Stechmücken vor allem auch die ökologischen Rahmenbedingungen eines Brutgebietes erfasst werden.</Text>
                    </Bullet>
                    <Bullet>
                        <Subtitle>4. Strategie</Subtitle>
                        <Text>Das Erarbeiten einer Bekämpfungsstrategie auf der Basis der Kartierungsergebnisse. Die ökologischen Rahmenbedingungen bestimmen, welche Applikationstechnik Anwendung findet. Treten z.B. trittempfindliche Pflanzengesellschaften auf, so wird vorwiegend der Hubschrauber eingesetzt. Kommen störempfindliche Vögel vor, so wird z.B. zu Fuß oder mit dem Helikopter aus großer Höhe bekämpft.</Text>
                    </Bullet>
                    <Bullet>
                        <Subtitle>5. Infrastruktur</Subtitle>
                        <Text>Aufbau einer straffen Organisation, die qualifiziertes Personal und vor allem auch alle Gemeinden umfasst, die umfangreiche Massenbrutgebiete besitzen, um eine effektive und erfolgreiche Bekämpfung gewährleisten zu können.</Text>
                    </Bullet>
                    <Bullet>
                        <Subtitle>6. Kontrolle</Subtitle>
                        <Text>Untersuchung zur Umweltverträglichkeit und zum Erfolg der getroffenen Bekämpfungsmaßnahmen (Begleituntersuchungen).</Text>
                    </Bullet>
                    <Bullet>
                        <Subtitle>7. Optimierung</Subtitle>
                        <Text>Konsolidierung und Optimierung der Maßnahmen (Optimierung der Methoden um ein Höchstmaß an Umweltverträglichkeit und Effektivität zu gewährleisten sowie zur Vermeidung von Resistenz).</Text>
                    </Bullet>
                </Section>
            </Content>
        </Wrapper>
    </div>
);