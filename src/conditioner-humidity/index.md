# Conditioner Humidity
Новая модель кондиционера учитывает еще и влажность в помещении. Поскольку при охлаждении влажность повышается, то кондиционер ни в коем случае не включается, если влажность в помещении превышает 80%.

Кроме того, на этом кондиционере требуемую температуру можно настраивать с пульта. Таким образом, если пользователь выставил с пульта температуру `T` градусов, то кондиционер включается, если температура в комнате строго больше `T`, а влажность 80% или ниже. Если же хотя бы одно из условий не выполняется, то кондиционер выключается.

### Исходные данные
На одной строке вводятся три числа — выставленная пользователем температура (`T`), текущая температура в комнате и текущая влажность в комнате. Температуры указаны в градусах, влажность — в процентах.

### Результат
Выведите строку `on`, если кондиционер включится, и `off`, если выключится.

### Пример
| Выходные данные | Результат   |
|-----------------|-------------|
| `20 22 60`      | `on`        |
