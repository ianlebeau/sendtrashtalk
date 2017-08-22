How the Icon System Works...

- Place icon svgs into the 'icons' folder
- Run gruntfile to compile those icons to the 'icons.svg' file
- 'icons.svg' must be inline on the page you want to call the icon

- Syntax for using icon:

	<svg class="icon">
      <use xlink:href="#shape-NAME-OF-SVG"></use>
    </svg>


- Sizing
	- .icon-sm
	- .icon-md
	- .icon-lg
	- .icon-xl

- Color
	- .icon-success

- Position
	- .icon-fl-right (float right)