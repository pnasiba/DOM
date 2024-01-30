## Attributes

```
 element.id -> elementning "id" sini qaytaradi
 element.placeholder -> elementning "placeholder" ini qaytaradi
 element.type -> "type" ni qaytaradi.

 Va hokazo...  // alt, class, name, content, action 
```
<br>

__Attributelarni o'zgartirish ham mumkun👇__

```
element.type="color" // "range"

element.placeholder="Enter your number.."
// shunga o'xshash
```

<br>

__getAttribute("")__
```
getAttribute("id or placeholder or type like that") // -> Attributeni olib uning valuesini qaytaradi.


elem.getAttribute(name) – gets the value.
```
<br>

__setAttribute('  ', '  ')__
```
setAttribute(' ', ' ') // -> Biron bir tanlangan elementga boshqa bir element tayinlash. Agar yo'q bo'lsa o'zi yaratib qo'yadi.

elem.setAttribute(name, value) – sets the value.

```
<br>

__hasAttribute()__

```
The hasAttribute() method returns true if the attribute exists, otherwise false.


elem.hasAttribute(name) – checks for existence.
```

<br>

## Class


**className** -> classning nomini qaytaradi

**classList** -> arr qilib classNamelarni qaytaradi

```
Items of classList: add()
                    remove()
                    contain()
                    toggle()
```
<br>

__add()__

```
element.classList.add("classname") // -> className qo'shib beradi. Va argumentni xohlagancha berish mumkun.
```
<br>

__remove()__

```
element.classList.remove("classname") // -> classname ni remove qiladi
```
<br>

__contains()__

```
element.classList.contains("classname") // -> class bor yo'qligini tekshiradi. Va return true or false
```
<br>

__toggle()__

```
element.classList.toggle("classname") // -> class bor bo'lsa remove qiladi, yo'q bo'lsa add qiladi
```
<br>