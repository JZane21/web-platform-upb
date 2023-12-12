import React from "react";
import ContentPage from "../../../components/ContentPage";
import styles from "./FaseCierre.module.css";

const FaseCierre = () => {
  return (
    <ContentPage>
      <div className="p-4 overflow-y-auto">
      <h2 className=" text-4xl font-semibold mb-4 p-6">
          Fase de Cierre
        </h2>
      <div className="p-4 grid grid-cols-3 gap-4">
        {/* Primer Contrato */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Manual de Uso del Sitio Web
          </h2>
          <div className={styles.contratoTextoScroll}>
            <strong>Acerca del Manual:</strong>
            <div>
              Este manual ofrece una guía paso a paso, tanto gráfica como
              textual, para utilizar el sitio web eficientemente en dispositivos
              de escritorio y móviles. Busca garantizar una experiencia de
              usuario agradable y satisfacer todas las necesidades de
              información.
            </div>
            <div>
              <strong>Menú del Sitio:</strong> El sitio web dispone de un menú intuitivo que
              facilita el acceso a las distintas secciones disponibles.
            </div>
            <div>
              <strong>Uso del Sitio Web en Escritorio:</strong>
              <ol>
                <li>
                  <strong>1.Eventos:</strong> Descripción completa de eventos, con énfasis en sus
                  características principales y acompañados de imágenes.
                </li>
                <li>
                  <strong>2.Cultura:</strong> Información sobre talleres, actividades y
                  presentaciones culturales, incluyendo imágenes descriptivas.
                </li>
                <li>
                  <strong>3.Noticias:</strong>3.Noticias: Las noticias más relevantes para la comunidad
                  académica y el público general.
                </li>
                <li>
                  4.Políticas: Detalles sobre las reglas, regulaciones y
                  normativas que rigen la institución.
                </li>
                <li>
                  5.Anuncios: Información sobre cambios administrativos,
                  actualizaciones de políticas, nuevos programas académicos,
                  entre otros, con imágenes relevantes.
                </li>
              </ol>
            </div>
            <div>
              Uso del Sitio Web en Móvil: El menú inicial permite explorar las
              mismas secciones que la versión de escritorio. Las secciones de
              Eventos, Cultura, Noticias, Políticas y Anuncios mantienen un
              formato similar al de la versión de escritorio, adaptadas para una
              navegación móvil eficiente.
            </div>
            <div>
              Anexos: Agradecimiento a los usuarios por su preferencia y
              compromiso para mantenerlos informados y actualizados.
            </div>
          </div>
        </div>

        {/* Segundo Contrato */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Análisis de Métricas de Rendimiento
          </h2>
          <div className={styles.contratoTextoScroll}>
            <div>
              Metodología: El análisis de métricas mide y evalúa el rendimiento
              del software en desarrollo, enfocándose en tendencias,
              comportamientos y resultados. Las métricas clave incluyen
              escalabilidad, estabilidad, capacidad de respuesta, velocidad y
              disponibilidad.
            </div>
            <div>
              Métricas Específicas: - Escalabilidad: Medida por el número de
              usuarios simultáneos y el tiempo de respuesta bajo carga. -
              Estabilidad: Evalúa la tasa de error, el tiempo medio entre fallos
              (MTBF) y el tiempo de recuperación (MTTR). - Capacidad de
              Respuesta: Incluye el tiempo de respuesta del usuario, la latencia
              de red y la capacidad de procesamiento. - Velocidad: Mide el
              tiempo de carga, renderización y ejecución de consultas. -
              Disponibilidad: Cuantificada a través del tiempo de inactividad y
              el porcentaje de disponibilidad.
            </div>
            <div>
              Conclusiones: - La escalabilidad actual del sistema es adecuada,
              pero se requiere monitoreo continuo. - La estabilidad necesita
              mejoras en la tasa de error y MTBF, además de minimizar el MTTR. -
              La capacidad de respuesta puede optimizarse mejorando la
              infraestructura de red y el procesamiento. - Mejorar la velocidad
              implica optimizar tiempos de carga y renderización, así como la
              eficiencia de consultas. - La disponibilidad se mejora reduciendo
              el tiempo de inactividad y aumentando el porcentaje de
              disponibilidad.
            </div>
            <div>
              Recomendaciones: - Realizar pruebas constantes de escalabilidad y
              adoptar medidas para mejorar la estabilidad. - Optimizar la
              infraestructura de red y procesamiento para mejorar la respuesta.
              - Aplicar técnicas de optimización de código para aumentar la
              velocidad. - Establecer monitoreo constante para mantener alta
              disponibilidad.
            </div>
            <div>
              Implementando estas recomendaciones se logrará mejorar
              significativamente el rendimiento del software, asegurando una
              experiencia más estable, rápida y accesible para los usuarios.
            </div>

            {/* Continúa con el resto del contenido del segundo contrato */}
          </div>
        </div>

        {/* Tercer Contrato */}
        <div className="border border-gray-300 shadow-md bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Contrato de Cierre</h2>
          <div className={styles.contratoTextoScroll}>
            <div>
              Entre: La Universidad Privada Boliviana (UPB), en adelante
              denominada &quot;el Cliente&quot; y [Nombre de la Firma
              Consultora], en adelante denominada &quot;el Consultor&quot;.
            </div>
            <div>
              1. Objeto del Contrato El presente contrato representa el acuerdo
              de cierre y soporte post-entrega entre el Cliente y el Consultor
              tras la finalización del proyecto de diseño y desarrollo del
              portal web &quot;RedLaboralUPB&quot;.
            </div>
            <div>
              2. Período de Soporte Post-Entrega El Consultor proporcionará un
              período de soporte técnico y mantenimiento de tres (3) meses
              inmediatamente después de la finalización del contrato de
              desarrollo de un año.
            </div>
            <div>
              3. Alcance del Soporte Post-Entrega Durante el período de soporte
              post-entrega, el Consultor se compromete a: - Corregir errores y
              problemas técnicos que se identifiquen después de la entrega final
              del portal. - Brindar asistencia técnica y soporte a los usuarios
              finales y al personal técnico de la UPB. - Implementar pequeñas
              mejoras y actualizaciones que no constituyan un desarrollo mayor.
            </div>
            <div>
              4. Duración del Soporte Post-Entrega El soporte post-entrega
              comenzará el [Fecha de inicio] y concluirá el [Fecha de fin], tres
              meses después.
            </div>
            <div>
              5. Compensación Por los servicios de soporte post-entrega, el
              Cliente acordará una compensación que se detallará en este
              contrato y que será pagada en su totalidad al finalizar el período
              de tres meses, a menos que se acuerde de otra manera.
            </div>
            <div>
              6. Obligaciones del Consultor El Consultor se compromete a: -
              Responder a las solicitudes de soporte dentro de un plazo
              razonable acordado por ambas partes. - Mantener la funcionalidad y
              rendimiento del portal conforme a los estándares acordados.
            </div>
            <div>
              7. Obligaciones del Cliente El Cliente se compromete a: -
              Notificar al Consultor sobre cualquier problema o requerimiento de
              soporte de manera oportuna. - Proveer cualquier información
              necesaria para la resolución de incidencias.
            </div>
            <div>
              8. Detalle de Costos del Proyecto A continuación se detalla la
              estructura de costos asociados a los diferentes módulos
              desarrollados durante el proyecto:
            </div>
            <div>
              {" "}
              - Módulo 1: Gestión de Usuarios - Costo: [Costo estimado del
              Módulo 1] - Módulo 2: Vistas de Información - Costo: [Costo
              estimado del Módulo 2] - Módulo 3: Procesos de Selección de
              Personal - Costo: [Costo estimado del Módulo 3] - Módulo 4:
              Comunicación Interna - Costo: [Costo estimado del Módulo 4] -
              Módulo 5: Desarrollo de Contenidos - Costo: [Costo estimado del
              Módulo 5]
            </div>
            <div>
              9. Outline de Entregables Concluidos Al término del proyecto, el
              Consultor entregó lo siguiente:
            </div>
            <div>
              {" "}
              a. Portal web &quot;RedLaboralUPB&quot; completamente funcional.
              b. Sistema de gestión de conocimientos integrado. c. Documentación
              técnica y manuales de usuario. d. Informes de pruebas de
              usabilidad y rendimiento. e. Servicio de hosting y protocolos de
              seguridad implementados. f. Sesiones de capacitación para el
              personal de la UPB.
            </div>
            <div>
              10. Cierre del Proyecto Al término del período de soporte
              post-entrega, se llevará a cabo una reunión de cierre de proyecto
              para confirmar que todas las obligaciones contractuales se han
              cumplido satisfactoriamente.
            </div>
            <div>
              11. Propiedad Intelectual La propiedad intelectual de los
              entregables desarrollados durante el contrato de desarrollo de un
              año seguirá siendo propiedad del Consultor a menos que se
              especifique lo contrario.
            </div>
            <div>
              12. Cláusula de Confidencialidad Las obligaciones de
              confidencialidad continuarán vigentes incluso después del cierre
              del presente contrato según lo estipulado en el contrato original
              de servicios de consultoría.
            </div>
            <div>
              13. Resolución de Conflictos Las partes acuerdan que cualquier
              disputa surgida en relación con este contrato será resuelta
              mediante arbitraje, a menos que se resuelva amistosamente entre
              las partes.
            </div>
            <div>
              14. Firma de las Partes Este contrato es un complemento al
              contrato original y no invalida ninguna de
            </div>
            <div>
              {" "}
              las cláusulas previamente acordadas a menos que se especifique
              expresamente en este documento.
            </div>
            <div>
              Por el Cliente: _____________________ Nombre: Cargo: Fecha:
            </div>
            <div>
              Por el Consultor: ___________________ Nombre: Cargo: Fecha:
            </div>

          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-4 mx-8">
        Enlaces a nuestro material
      </h2>
      <ul className="list-disc pl-6 m-2 mx-8 pb-5">
        <li>
          <a
            className="text-blue-400 hover:font-semibold hover:text-blue-800"
            href="https://docs.google.com/document/d/1clfb4rh8dLyBKP6P1WFczkzwyR4UlCPerTXS-z6P3x8/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manual de Usuario
          </a>
        </li>
        <li>
          <a
            className="text-blue-400 hover:font-semibold hover:text-blue-800"
            href="https://docs.google.com/document/d/1w4_9UlqFbHP2DEA3dhBRkWddiNRH499c4R4kJirliLM/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Análisis de Métricas de Rendimiento
          </a>
        </li>
        <li>
          <a
            className="text-blue-400 hover:font-semibold hover:text-blue-800"
            href="https://docs.google.com/document/d/1P7YjJzcUr7dGsoxH4hSmKT1p6kA0gBsMczXHTn-4EDs/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contrato de cierre
          </a>
        </li>
      </ul>
      </div>
    </ContentPage>
  );
};

export default FaseCierre;
