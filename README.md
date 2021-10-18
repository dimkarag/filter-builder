# Filter Builder
Filter Builder is a Vue Component for creating dynamic search filters based on user configuration. Filter Builder uses Vuetify and Material Design Icons.

## Properties
 * **options**: Non required prop
>Default options values below:
> ```python
> options: {
>	builderIcon: 'mdi-plus',
>	builderIconColor: '#ac282d',
>	removeIcon: 'mdi-close-circle',
>	removeIconColor: '#FF0000'
> }
> ```
> * **builderIcon**: Material Design Icon for the filter builder button which opens the selection of the filters to add.
> * **builderIconColor**: Color of the filter builder add filter button.
> * **removeIcon**: Material Design Icon of the button which appears on the top right corner of a selected filter in order to remove it.
> * **removeIconColor**: Color of the filter removal button.
* **filters**: Required prop. Describes the available filters for selection.
> > **-Checkbox Filter**
> >  ```python
> >filters: {
> >		label: 'Active',
> >		key: 'active',
> >		type: 'boolean'
> >}
> >```
> > * **label**: The label which is showned and describes the filter
> > * **key**: The field key of the returned object on filter value selection. This property is needed for all the variety of filters. For example, if the checkbox is checked the returned object it would be:
> >```python
> >Example of Returned Object
> > {
>> 	active: true
>> }
>>```
> > * **type**: The type of filter. This property is needed for all filters in order to define the filter component.

> > **-Text Field Filter**
> >  ```python
> >filters: {
> >		label: 'Name',
> >		key: 'name',
> >		type: 'text'
> >}
> >```
> > * **label**: The label which is showned and describes the filter
> > * **key**: The field key of the returned object on filter value selection. This property is needed for all the variety of filters. For example, if we write on the text field the value 'John' the returned object it would be:
> > ```python
> >Example of Returned Object
> > {
>> 	name: 'John'
>> }
>>```
> > * **type**: The type of filter. This property is needed for all filters in order to define the filter component.
>
> >**-Dropdown Select Filter**
>>```python
>>{
>>	label: 'Person',
>>	key: 'person',
>>	type: 'dropdown',
>>	items: [
>>		{ id: 1, title: 'Mr', name: 'John' },
>>		{ id: 2, title: 'Mrs', name: 'Anna' }
>>	],
>>	itemValue: 'id',
>>	itemTextKey: ['title', 'name'],
>>	fieldSeparator: '-',
>>	prependIcon: 'mdi-domain'
>>}

> > * **label**: The label which is showned and describes the filter.
> > * **key**: The field key of the returned object on filter value selection. This property is needed for all the variety of filters.
> > * **type**: The type of filter. This property is needed for all filters in order to define the filter component.
> > * **items**:  The Array of items that can be selected. This array can be any native type array (such as string, number etc) or an object array.
> > * **itemValue**: If the items are an object array, itemValue defines the field that contains the desired value to be returned on the returned object from the filter.
> > * **itemTextKey**: This property can be a single String or Array of Strings. This property defines when the items are an object array, which fields of the object should be displayed on the  option selection text.
> >* **fieldSeparator**: When the itemTextKey is an Array, this property defines the separator between the fields which are gonna be displayed on the selection option text. Default is a space.
> > * **prependIcon**:  This property defines the Material Design Icon which appear on the option selection component.

>>For the above example the filter select options will be:
>> * Mr-John
>> * Mrs-Anna
>Lets say that we choose the first selection 'Mr-John', the return object from the filter builder will be:
> > >  ```python
> >>Example of Returned Object
> > >{
>> >	person:  1
>> >}
>> >```

> >**-Radion Button Filter**
>>```python 
>>{
>>	label: 'Auto',
>>	key: 'id',
>>	type: 'radio-button',
>>	items: [
>>		{ id: 1, type: 'Coupe', name: 'Car' },
>>		{ id: 2, type: 'Street', name: 'Motorbike' }
>>	],
>>	itemValue: 'id',
>>	itemTextKey: ['type', 'name'],
>>	fieldSeparator: '-',
>>	direction: 'row',
>>	color: 'red'
>>}
>> ```
> > * **label**: The label which is showned and describes the filter (As described above).
> > * **key**: The field key of the returned object on filter value selection. This property is needed for all the variety of filters.
> > * **type**: The type of filter. This property is needed for all filters in order to define the filter component.
> > * **items**:  The Array of items that can be selected. This array can be any native type array (such as string, number etc) or an object array.
> > * **itemValue**: If the items are an object array, itemValue defines the field that contains the desired value to be returned on the returned object from the filter.
> > * **itemTextKey**: This property can be a single String or Array of Strings. This property defines when the items are an object array, which fields of the object should be displayed on the option label text.
> >* **fieldSeparator**: When the itemTextKey is an Array, this property defines the separator between the fields which are gonna be displayed on the selection option text. Default is a space.
> >* **direction**:  This property defines the direction of the radio buttons. Default is column direction.
> > * **color**:  This property defines the color of the radio buttons. Default is blue.
>
>>For the above example the filter radio buttons will be:
>> * Coupe-Car
>> * Street-Motorbike
>Lets say that we choose the second selection 'Street-Motorbike', the return object from the filter builder will be:
> > >  ```python
> >>Example of Returned Object
> > >{
>> >	id:  2
>> >}
>> >```
## Events
* **@filter-change**: This event fires every time a selected filter's value is setted or is changed. The method's argument that listens to this event, is an array of objects.
The object format is defined on property 'filters' .

## License
[MIT](https://choosealicense.com/licenses/mit/)