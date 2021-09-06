import React from 'react';
import { Approach, Wrapper, Cell, Container, Content, Bullet, Section } from './styles';
import { Text, Title, Subtitle} from '../index';
import { StaticImage } from 'gatsby-plugin-image';

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
        <Approach id="vorgehen">
                <Container>
                    <Cell className="padding">
                        <Title>Vorgehen bei der Bekämpfung</Title>
                        <Subtitle>1. Festlegung des Larvenbesatzes</Subtitle>
                        <div className="separator"></div>
                        <Text>Es werden in den einzelnen Probearealen jeweils 10 Schöpfproben mit einem Standardschöpfer (ein 0,3-Liter fassender, heller Plastikbecher) entnommen und die Anzahl der Larven sowie deren Larvenstadien und Gattungszugehörigkeit erfasst. Geschöpft wird an Stellen, an denen sich bei ruhigem Verhalten Stechmückenlarven beim Absuchen der Wasseroberfläche ausmachen lassen. Über die Besatzdichte der einzelnen Probestellen sowie den Entwicklungsstand der Larven wird Protokoll geführt. Treten bei Hochwasser regelmäßig 5 und mehr Larven pro Liter auf, so müssen Bekämpfungsmaßnahmen entsprechend dem entwickelten Bekämpfungskonzept vorgenommen werden.</Text>
                    </Cell>
                    <Cell>
                        <StaticImage
                            src="../../images/mosquito.jpg"
                            alt="larvae control"
                            quality={100}
                        />
                    </Cell>
                </Container>
                <Container>
                    <Cell>
                        <StaticImage
                            src="../../images/mosquito.jpg"
                            alt="larvae control"
                            quality={100}
                            />
                    </Cell>
                    <Cell className="padding">
                        <Title>2.</Title>
                        <Subtitle>Bereitstellung der Wirkstoff-Granulate</Subtitle>
                        <div className="separator"></div>
                        <Text>Sämtliche Arten von Formulierungen müssen auf die Wasseroberfläche der Stechmückenbrutstätten appliziert werden. Im Fall der Suspensionen geschieht dies in der Regel durch das Versprühen mit Hilfe einer Rückenspritze oder über spezielle Sprüheinrichtungen am Hubschrauber. Bei der Fuß-Applikation läuft der Anwender entweder durch oder entlang des Brutgewässers und versprüht die Suspension gleichmäßig auf der Wasseroberfläche. Der Wirkstoff gelangt so in die Fresszone der Larven, wo er von ihnen aufgenommen wird.</Text>
                    </Cell>
                </Container>
                <Container>
                    <Cell className="padding">
                        <Title>3.</Title>
                        <Subtitle>Erfolgskontrollen</Subtitle>
                        <div className="separator"></div>
                        <Text>Nach Abschluss der Bekämpfungsmaßnahmen in einem zeitlichen Abstand von 1-2 Tagen werden umfangreiche Erfolgskontrollen per Schöpfproben durchgeführt, um die Reduktion der Stechmückenlarven zu dokumentieren.Der Bekämpfungserfolg wird außerdem durch das Aufhängen von CO2-Lichtfallen, mit denen die ausgewachsenen fliegenden (und stechenden) Mücken erfasst werden, in regelmäßigen Abständen kontrolliert und dokumentiert.</Text>
                    </Cell>
                    <Cell>
                        <StaticImage
                            src="../../images/mosquito.jpg"
                            alt="larvae control"
                            quality={100}
                        />
                    </Cell>
                </Container>
        </Approach>
    </div>
);