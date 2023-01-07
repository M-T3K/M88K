
# [Spanish](#spanish) | [English](#english)

# Spanish


# M88K

## Importante

No habrá actualizaciones futuras

Esta extensión es un intento de desarrollar un Entorno de Desarrollo agradable para el lenguaje ensamblador de los microprocesadores de la familia 88000 de Motorola. Por ahora, tiene bastantes carencias, pero está en un punto en el que cumple con su función de hacer el desarrollo más ameno.

El objetivo de este proyecto es ayudarme con alguna de las clases que tengo en la universidad. La idea principal es que me permita trabajar con esta modalidad de ensamblador con la misma facilidad que con un lenguaje de más alto nivel.

La mayoría de las funciones son comprobadas mediante Mocha. Hay 41 tests, divididos en 2 suites de Testing the Mocha, y todas ellas deberían funcionar como es de esperar. Si esto no es así, véase la sección de **Problemas Conocidos** para saber como reportar un error. Gracias.

Actualización: La versión 0.5.0 trae muchos cambios. No puedo garantizar que trabaje activamente en el desarrollo de esta extensión dada la falta de tiempo libre. Sin embargo, es de esperar que para la versión 0.9.0 todo lo mencionado en la lista de tareas esté terminado. La versión 1.0.0 simplemente se dedicará a arreglar los errores y problemas que puedan haber surgido. La fecha de salida estimada de la versión 1.0.0 es Junio de 2019. Llegado este punto, consideraré esta extensión completada.

## Características y Funcionalidades

Por ahora, la extensión ofrece las siguientes funcionalidades:

### Resaltado de Sintaxis

- Resaltado de Sintaxis completo desarrollado alrededor del estándar M88K-HK que he diseñado para aumentar la legibilidad del código. Véase a continuación la especificación (por registro) de este estándar.

#### M88K-HK

- r1 : Registro que guarda la dirección de retorno para que se pueda volver al anterior Contador de Programa (PC).
- r2 & r3 : Estos registros estan reservados y solo se deberían usar para MACROs.
- De r4 a r10 : Registros para Variables.
- De r11 a r16 : Registros para operaciones aritméticas.
- r17, r18, y r19 : Registros para comparaciones lógicas (cmp).
- De r20 a r24 : Reservado para cargar los argumentos pasados a una subrutina.
- De r25 a r28 : Registros auxiliares que no tienen un propósito concreto.
- r29 : Registro reservado para almacenar el valor de retorno de una subrutina.
- r30 y r31 : Registros reservados para operaciónes con el Puntero de Pila.

### Snippets

- Snippets de código para cada extensión, MACROs comunes, y código repetitivo.

### Manipulación de Texto

Esta extensión permite a modificación de selecciones mediante las siguientes funciones:

- **endianTransform**: Cambia el modo de Endian de un número Hexadecimal.
- **addHex**: Añade '0x' al inicio de un String. 
- **hexToDec**: Convierte de Hexadecimal a Decimal. Si se trata de un número hexadecimal negativo, se necesita un '-' delante, ya que si no se usa un bit de signo no se puede identificar un número negativo consistentemente.
- **decToHex**: Convierte de Decimal a Hexadecimal.

### Modo de Endian Global

Existe una opción para cambiar el modo de Endian que se va a utilizar (por defecto) en las operaciones.

## Lista de Tareas y Funcionalidades Planeadas


- Selección Automática: Cuando no haya nada seleccionado, la extensión selecciona por el usuario hasta el anterior carácter de Whitespace.
- Generador de Matrices: Capaz de escribir rápidamente una matriz por el usuario en función de los parámetros dados por el usuario.
- Contador de Instrucciones: Contador automático del total de Intrucciones en un archivo.
- Intellisense y Detección de Errores en el sintaxis.
- Emulador con capacidad de Depuración.

## Configuración de la Extensión

### Modo de Endian (por defecto)

La entrada  `m88k.defaultEndianMode` le permite a un usuario especificar que modo de Endian debe ser usado por defecto al activar la extensión. Por defecto es `Little Endian`.

## Problemas conocidos

Para la versión 0.5.0 he arreglado todos los errores y problemas conocidos, y he puesto en marcha tests para evitar errores en futuras versiones. Además, he intentado mejorar la calidad del código para que sea más rápido, eficiente, y sobretodo, mantenible. Si encuentra algún error, dejemelo saber en [Github](https://github.com/M-T3K/M88K/issues).

## Acerca de Contribuir al Desarrollo de esta extensión

Si quiere contribuir al desarrollo de M88K, sepa que aceptamos Pull Requests en [Github](https://github.com/M-T3K/M88K/pulls). Si está interesado en ayudar, pero no sabe que hacer, puede mirar la lista de areas [aquí](https://github.com/M-T3K/M88K/blob/master/todo.txt).

## Historial de Versiones

Si quiere saber que cambias hubo en cada versión, puede mirarlo [aquí](https://github.com/M-T3K/M88K/blob/master/CHANGELOG.md). Al fondo del documento se encuentran, de manera más concisa, los cambios más recientes.
Nota: Todo lo que tenga que ver con las versiones está en Inglés.

# English

# M88K

## Important

There will be no further updates to this extension.

This is an attempt to create a fully fledged IDE for the assembly language used by the Motorola 88K family of Microprocessors. So far it does not cover many features but eventually it will have everything that one may need, from Syntax Highlighting to a built-in emulator for this architecture.

This project's objective is to help me with some of the classes I'm taking. Ideally, it would make working with this type of assembly as comfortable as working with a higher-level language.

Most of the features are tested using Mocha Unit Testing: There are 41 Unit Tests in total,split into two different Mocha Testing Suites, and everything should work as expected. If this is not the case, please refer to the **Known Issues** Section for instructions on how to report bugs/glitches/issues. Thank you.

Version 0.5.0 has a lot of changes. I'm not going to be actively working on this extension anymore (So I won't push as many updates) due to lack of free time. It is expected that by version 0.9.0 every task in the todo list (except bug fixing) will be done, and 1.0.0 will simply be a bug fixing update to ensure that the extension works properly, and that it has as few bugs as possible. Ideally, by June 2019, we will have reached version 1.0.0, and I will consider this completed.

## Features

Currently it offers the following features:

### Syntax Highlighting

- Complete Syntax Highlighting.

#### M88K-HK

Syntax Highlighting is built around the M88K-HK standard for the language (Which I created). This is the specification per-registry for this standard:

- r1 : Register that stores the return address so that you can go back to the previous instruction pointer.
- r2 & r3 : These registers are both reserved, and are to be used exclusively with MACROs.
- r4 a r10 : General Variable Registers.
- r11 a r16 : Registers to perform arithmetic.
- r17, r18, r19 : Logic registers to be used in comparisons.
- r20 a r24 : Reserved to be used exclusively to load Subroutine parameters.
- r25 a r28 : Auxilary Registers that can be used for any purpose whatsoever. 
- r29 : Reserved register to store the return value if any.
- r30, r31 : Both Reserved to perform operations with the Stack Pointer.

### Snippets

- Rich Code Snippets available for the most used instructions, MACROs, and repetitive code.

### Text Manipulation

The following functions manipulate selected text:

- **endianTransform**: Changes the endian mode of a hex number.
- **addHex**: Adds '0x' at the beginning of a string.
- **hexToDec**: Converts from Hexadecimal to Decimal. If it is a negative hexadecimal number you must have a negative sign '-' to specify that it is a negative number. Otherwise it won't work!
- **decToHex**: Converts from Decimal to Hexadecimal.

### Global Endianness Mode

This extension supports Big Endian and Little Endian modes at the Global Scope. This means that all functions will use this mode to provide a result.

## Planned Features / To Do

- Automation: You should be able to just call the command and see an inmediate result without any selections whatsoever.
- Matrix Generator: Generate Matrices based on input with support for random numbers.
- Instruction Counter: Counts all the instructions in a file.
- Intellisense & Live Syntax Error Detection.
- An Emulator/Interpreter with Debugging capabilities.

## Extension Settings

### Default Endian Mode

This extension creates the setting `m88k.defaultEndianMode` to specify the default endian mode to be used upon activation. By default, it is set to `Little Endian`.

## Known Issues

As of version 0.5.0 I have fixed all bugs/issues that I was aware of. I've tried to improve the quality of the code itself to ensure that it is faster, more efficient, and maintanable. If you encounter any bugs or glitches, or have any suggestions, please, tell me [@Github](https://github.com/M-T3K/M88K/issues).

## Contributing

If you are looking to contribute, feel free to submit a Pull Request to the Repository on [Github](https://github.com/M-T3K/M88K/pulls). You should also check our [TO-DO list].(https://github.com/M-T3K/M88K/blob/master/todo.txt).

## Release Notes

Only information about the last 3 updates is displayed here. For more in-depth information, check our [changelog](https://github.com/M-T3K/M88K/blob/master/CHANGELOG.md).


### [0.5.0] - 03/01/2019

- Happy New Year. =)
- Added a Global Endian Mode. Now, instead of having to go through an additional submenu, all operations use this mode. This should make the extension much more user-friendly and VSCode-like. There is also a setting to select the default mode the extension uses (`m88k.defaultEndianMode`).
- Fixed a bug with conversion functions involving negative numbers. Now, in order to convert a negative Hexadecimal number to its decimal counterpart, you must add '-' before the number you are trying to convert.
- The Extension will now automatically activate if the m88k language is detected.
- Changed the Language Name from m88k assembly to M88K.
- Removed '.asm' from the list of valid language extensions.
- Autoclose and autosurround works with most types of braces.
- VSCode keybinds for comments now work fine.

### [0.2.0] - 12/12/18

- Snippets added.

### [0.1.2] - 12/12/18

- Fixed Commands so that they actually work.
- Fixed a bug with Syntax Highlighting's Regex. Now words ending in ':' will be highlighted correctly.

-------------------------------------------------------------------------------------------

## Credits

Originally I started only using [MDTools](https://github.com/Microsoft/vscode-MDTools/) as a starting point. However, by now I've taken a look at all the example extensions by the Visual Studio Code Team.
