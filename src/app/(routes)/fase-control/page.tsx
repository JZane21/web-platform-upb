"use client";
import React from "react";
import ContentPage from "../../../components/ContentPage";
import Image from "next/image";
import testImage from "../../../assets/test_image.jpg";
import servidor from "../../../assets/servidor.png";

const FaseControl = () => {
  return (
    <ContentPage>
      <div className="p-4 overflow-y-auto">
        <h2 className=" text-4xl font-semibold mb-4 p-6">
          Fase de Control de Calidad e Implementación
        </h2>
        <div className="flex w-full justify-center items-center">
          <Image
            src={testImage}
            alt="Aqui va una imagen chida :D"
            className="my-4 rounded-xl shadow-xl w-[500px]"
          />
        </div>
        <div className="px-6">
        <div className="container mx-auto">
          <section>
            <h2 className="text-2xl font-semibold my-8">Introducción</h2>
            <section>
              <p>
                En esta sección, se analizará a detalle cómo se llevará a cabo
                el control de calidad de la aplicación "Sistema de Comunicación
                e Integración de nuevos Empleados en la UPB" desarrollada con
                Next.js en cada Sprint. Este proceso se realizará durante el
                tiempo establecido para trabajar con la Universidad Privada
                Boliviana (UPB), según lo especificado en el contrato.
              </p>
            </section>
          </section>
          <section>
            <h2 className="text-2xl font-semibold my-8">
              Pruebas y Control de Calidad
            </h2>
            <p className="mb-4">
              Para garantizar un control de calidad efectivo, se planificará la
              estructura de las pruebas. Esta planificación es esencial para
              permitir a los desarrolladores replicar y solucionar posibles
              problemas durante el desarrollo del proyecto.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Número del caso de prueba.</li>
              <li>Nombre del user-story o funcionalidad en Trello.</li>
              <li>Nombre de la pantalla o componente para la prueba.</li>
              <li>Pasos numerados y ordenados para realizar el test.</li>
              <li>
                Lista de resultados esperados frente a los pasos anteriores.
              </li>
            </ul>
            <p className="mb-4">
              En caso de encontrar un bug, se utilizará la siguiente estructura
              para reportar una falla:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nombre del user-story o funcionalidad en Trello.</li>
              <li>
                Descripción de la falla y comportamiento esperado de la página
                web.
              </li>
              <li>Pasos numerados y ordenados para replicar el bug.</li>
              <li>Prioridad para ser corregido.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold my-8">Pruebas Unitarias</h2>
            Dado que se busca optimizar el tiempo dedicado a las pruebas, se
            emplearán pruebas unitarias utilizando Jest sobre los componentes de
            Next.js. Esto garantizará que los componentes devuelvan una
            respuesta visible para el usuario tras ejecutar diferentes
            funcionalidades de la página web.
          </section>
          <section>
            <h2 className="text-2xl font-semibold my-8">
              Jenkins e Integración Continua
            </h2>
            Para mantener un control continuo del producto tras su despliegue y
            garantizar actualizaciones efectivas en caso de fallos en
            producción, se optará por Jenkins, una herramienta de integración
            continua de código abierto. Jenkins permite integrar diversas
            herramientas de automatización, incluyendo Jest, para un control de
            calidad óptimo incluso en plazos cortos.
          </section>
        </div>
        <h2 className="text-3xl font-bold mt-4 mb-8">
          Seleccion del servidor, configuración y lanzamiento del portal web
        </h2>
        <Image
          src={servidor}
          className="my-4 mx-auto"
          alt={"serverhostdom.png"}
        />
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Elección del Hosting:</h2>
          <p className="text-gray-700">
            La elección del hosting se basará en el tamaño del sistema, la
            concurrencia y la latencia.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Ancho de Banda:</h2>
          <p className="text-gray-700">
            La estabilización del ancho de banda requiere pruebas y ajustes
            mediante el método de prueba y error. Se comenzará con un ancho de
            banda de 6000 MB/s para gestionar a todos los otros usuarios creados
            para en el sistema, con una concurrencia de hasta 70 usuarios.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            DNS (Sistema de Nombres de Dominio):
          </h2>
          <p className="text-gray-700">
            El DNS se utiliza para enlazar el hosting con el dominio. Los
            dominios .bo, los cuales son requeridos para el deploy de este
            proyecto, solo son vendidos por NIC en Bolivia, una entidad
            gubernamental.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Servidores y Configuración:
          </h2>
          <p className="text-gray-700">
            Los servidores deben contar con WHM, que incluye correos, usuarios y
            configuración de página. Para facilitar el uso del servidor con
            todas sus características, se utiliza CPanel. Al crear un usuario,
            se generan automáticamente el DNS y la IP. El desarrollo de las
            páginas se realiza en el localhost proporcionado por el servidor.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Licencias SSL:</h2>
          <p className="text-gray-700">
            Es necesario adquirir licencias SSL para garantizar una conexión
            segura por HTTPS. Las licencias SSL contribuyen a reforzar la
            seguridad del portal web, protegiendo la información transmitida
            entre los usuarios y el servidor.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Dominio .bo:</h2>
          <p className="text-gray-700">
            Se elige el dominio .com para reflejar el alcance local y establecer
            un costo para la facturación final para la universidad.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Capacidad y Almacenamiento:
          </h2>
          <p className="text-gray-700">
            La capacidad del sistema se estima en hasta 300 usuarios debido a su
            alcance local. Cada usuario contratado tiene asignados 15 GB para
            publicaciones, sumando un total de 4500 GB para el hosting de las
            cuentas de expositores.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Lanzamiento del Portal:</h2>
          <p className="text-gray-700">
            El lanzamiento seguirá pruebas y simulacros de carga para evaluar la
            capacidad del sistema. Se programarán ventanas de mantenimiento
            preventivo para actualizar y mejorar continuamente el portal.
          </p>
        </section>
        <section className="mb-8">
          <p className="text-gray-700">
            SkyNET, el servidor dedicado en la universidad, actúa como el núcleo
            tecnológico esencial proporcionando recursos clave para diversas
            aplicaciones. Con 16 procesadores Intel Xeon, 32 GB de RAM y 6 TB de
            almacenamiento, destaca por su rendimiento estable y control directo
            sobre la configuración. Sin embargo, tiene limitaciones en
            escalabilidad y velocidad de implementación en comparación con
            opciones en la nube como Amazon EC2, según la siguiente tabla
            comparativa.
          </p>
        </section>
        <table className="min-w-full bg-white  border-gray-300">
          <thead>
            <tr>
              <th className="bg-slate-300 py-2 px-4 border-b">
                Característica
              </th>
              <th className="bg-slate-300 py-2 px-4 border-b">SkyNET</th>
              <th className="bg-slate-300 py-2 px-4 border-b">
                Amazon Web Services
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Recursos Físicos</td>
              <td className="py-2 px-4 border-b">
                Servidor Dell PowerEdge R530 dedicado con 16 procesadores Intel
                Xeon, 32 GB de RAM y 6 TB de disco duro.
              </td>
              <td className="py-2 px-4 border-b">
                Basado en una plataforma de nube que utiliza una variedad de
                recursos virtuales distribuidos en una red de servidores.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Escalabilidad</td>
              <td className="py-2 px-4 border-b">
                Limitada a la capacidad del servidor físico. Requiere
                adquisición de hardware adicional para escalabilidad.
              </td>
              <td className="py-2 px-4 border-b">
                Altamente escalable, con capacidad para aumentar o disminuir
                recursos según las necesidades de la carga de trabajo.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Rendimiento</td>
              <td className="py-2 px-4 border-b">
                Rendimiento estable y predecible con recursos exclusivos.
              </td>
              <td className="py-2 px-4 border-b">
                Rendimiento variable, pero capacidad para ajustar recursos de
                manera eficiente.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Costos</td>
              <td className="py-2 px-4 border-b">
                Costos fijos asociados al servidor dedicado.
              </td>
              <td className="py-2 px-4 border-b">
                Modelo de precios flexible, pagando por el uso real de recursos.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Tiempo de Implementación</td>
              <td className="py-2 px-4 border-b">
                Implementación más lenta debido a la adquisición y configuración
                de hardware específico.
              </td>
              <td className="py-2 px-4 border-b">
                Implementación más rápida, con recursos aprovisionados de manera
                rápida y sencilla.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Redundancia y Disponibilidad
              </td>
              <td className="py-2 px-4 border-b">
                Menos redundancia natural, depende de un solo servidor físico.
              </td>
              <td className="py-2 px-4 border-b">
                Mayor redundancia, posibilidad de almacenar datos en múltiples
                ubicaciones y servidores. Mejora la disponibilidad.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Administración y Control</td>
              <td className="py-2 px-4 border-b">
                Mayor control directo sobre la infraestructura y configuración
                personalizada.
              </td>
              <td className="py-2 px-4 border-b">
                Menos control directo sobre la infraestructura subyacente, pero
                se ofrecen herramientas de gestión y control.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Ejemplos de Software y Versiones
              </td>
              <td className="py-2 px-4 border-b">
                CentOS Linux 7.2, Apache 2.4, PHP 7.2, Python 3.6.8, Java
                1.8.0_132, Node.js 12.12.12, MySQL-MariaDB 5.5.68, MongoDB
                4.0.28.
              </td>
              <td className="py-2 px-4 border-b">
                Variedad de opciones de sistemas operativos, y puede elegir
                configuraciones específicas según las necesidades.
              </td>
            </tr>
          </tbody>
        </table>

        <section className="mt-8">
          <p className="text-gray-700">
            Se sugiere la siguiente oferta tentativa: Ambiente Básico - (Website
            Hosting) $100 a $200 USD Mensuales
          </p>
        </section>

        <img
          src="https://www.clickittech.com.mx/wp-content/uploads/2017/12/diagramas-blog-esp-05.jpg"
          className="my-4 mx-auto h-[50%] w-[50%]"
        />
        <h2 className="text-xl font-bold mt-4">Referencias</h2>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800"
          href="https://docs.google.com/document/d/1oi4eHdyiQGkYoCgz1IJ3MhpuOVl5bHhXMQRIulmsWKE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sobre la Fase de Control de Calidad e Implementación
        </a>
        </div>
      </div>
    </ContentPage>
  );
};

export default FaseControl;
