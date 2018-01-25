function ResponsiveMenu($)
{
	this.ResponsiveMenuDataLeft;
	this.ResponsiveMenuDataRight;
	this.SelectedItem;
	this.RecordatoriosData;
	this.RecordatoriosUnread;
	this.RecordatoriosHab;
	this.ConsejosData;
	this.ConsejosUnread;
	this.ConsejosHab;
	this.Width;
	this.Height;

	// Databinding for property ResponsiveMenuDataLeft
	this.SetResponsiveMenuDataLeft = function(data)
	{
		///UserCodeRegionStart:[SetResponsiveMenuDataLeft] (do not remove this comment.)
		this.ResponsiveMenuDataLeft = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property ResponsiveMenuDataLeft
	this.GetResponsiveMenuDataLeft = function()
	{
		///UserCodeRegionStart:[GetResponsiveMenuDataLeft] (do not remove this comment.)
		return this.ResponsiveMenuDataLeft;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property ResponsiveMenuDataRight
	this.SetResponsiveMenuDataRight = function(data)
	{
		///UserCodeRegionStart:[SetResponsiveMenuDataRight] (do not remove this comment.)
		this.ResponsiveMenuDataRight = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property ResponsiveMenuDataRight
	this.GetResponsiveMenuDataRight = function()
	{
		///UserCodeRegionStart:[GetResponsiveMenuDataRight] (do not remove this comment.)
		return this.ResponsiveMenuDataRight;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property SelectedItem
	this.SetSelectedItem = function(data)
	{
		///UserCodeRegionStart:[SetSelectedItem] (do not remove this comment.)
		this.SelectedItem = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property SelectedItem
	this.GetSelectedItem = function()
	{
		///UserCodeRegionStart:[GetSelectedItem] (do not remove this comment.)
		return this.SelectedItem;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property RecordatoriosData
	this.SetRecordatoriosData = function(data)
	{
		///UserCodeRegionStart:[SetRecordatoriosData] (do not remove this comment.)
		this.RecordatoriosData = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property RecordatoriosData
	this.GetRecordatoriosData = function()
	{
		///UserCodeRegionStart:[GetRecordatoriosData] (do not remove this comment.)
		return this.RecordatoriosData;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property ConsejosData
	this.SetConsejosData = function(data)
	{
		///UserCodeRegionStart:[SetConsejosData] (do not remove this comment.)
		this.ConsejosData = data;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property ConsejosData
	this.GetConsejosData = function()
	{
		///UserCodeRegionStart:[GetConsejosData] (do not remove this comment.)
		return this.ConsejosData;
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		if (!this.IsPostBack) {
			var buffer = new gx.text.stringBuffer();
			buffer.clear();
			buffer.append('<nav id="ResponsiveMenu" class="navbar navbar-default">');
			buffer.append('<div class="container-fluid">');
			buffer.append('<div class="navbar-header">');
			buffer.append('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-collapse" aria-expanded="false">');
			buffer.append('<span class="sr-only">Toggle navigation</span>');
			buffer.append('<span class="icon-bar"></span>');
			buffer.append('<span class="icon-bar"></span>');
			buffer.append('<span class="icon-bar"></span>');
			buffer.append('</button>');
			buffer.append('</div>');
			buffer.append('<div class="collapse navbar-collapse" id="menu-collapse">');
			buffer.append('<ul class="nav navbar-nav">');
			var markup = this.loadMenuDataLeft(this.ResponsiveMenuDataLeft);
			buffer.append(markup);
			buffer.append('</ul>');
			buffer.append('<ul class="nav navbar-nav navbar-right">');
			markup = this.loadConsejos();
			buffer.append(markup);
			markup = this.loadRecordatorios();
			buffer.append(markup);
			markup = this.loadMenuDataRight(this.ResponsiveMenuDataRight);
			buffer.append(markup);
			buffer.append('</ul>');
			buffer.append('</div>');
			buffer.append('</div>');
			buffer.append('</nav>');
			this.setHtml(buffer.toString());
		}
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	this.tmpbuffer = new gx.text.stringBuffer();
	this.tmpbuffer.clear();
	this.loadMenuDataLeft = function (data) {
		var i = 0;
		for (i = 0; data[i] != undefined; i++) {
			if (data[i].Items != undefined && data[i].Items.toString() != "") {
				this.tmpbuffer.append('<li class="dropdown">');
				this.tmpbuffer.append('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onclick="' + this.me() + '.ItemOnClick(\'' + data[i].Id + '\',\'' + data[i].Title + '\',\'' + data[i].Description + '\',\'' + data[i].Link + '\');">' + data[i].Title + ' <i class="' + data[i].Description + '"></i> <span class="caret"></span></a>');
				this.tmpbuffer.append('<ul class="dropdown-menu">');
				this.loadMenuDataLeft(data[i].Items);
				this.tmpbuffer.append('</ul>');
				this.tmpbuffer.append('</li>');
			} else {
				this.tmpbuffer.append('<li><a href="' + data[i].Link + '" onclick="' + this.me() + '.ItemOnClick(\'' + data[i].Id + '\',\'' + data[i].Title + '\',\'' + data[i].Description + '\',\'' + data[i].Link + '\');">' + data[i].Title + '<i class="' + data[i].Description + '"></i> </a></li>');
			}
		}

		return this.tmpbuffer;
	}

	this.tmpbuffer2 = new gx.text.stringBuffer();
	this.tmpbuffer2.clear();
	this.loadMenuDataRight = function (data) {
		var i = 0;
		for (i = 0; data[i] != undefined; i++) {
			if (data[i].Items != undefined && data[i].Items.toString() != "") {
				this.tmpbuffer2.append('<li class="dropdown">');
				this.tmpbuffer2.append('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onclick="' + this.me() + '.ItemOnClick(\'' + data[i].Id + '\',\'' + data[i].Title + '\',\'' + data[i].Description + '\',\'' + data[i].Link + '\');">' + data[i].Title +'<i class="' + data[i].Description + '"></i> <span class="caret"></span></a>');
				this.tmpbuffer2.append('<ul class="dropdown-menu">');
				this.loadMenuDataRight(data[i].Items);
				this.tmpbuffer2.append('</ul>');
				this.tmpbuffer2.append('</li>');
			} else {
				this.tmpbuffer2.append('<li><a href="' + data[i].Link + '" onclick="' + this.me() + '.ItemOnClick(\'' + data[i].Id + '\',\'' + data[i].Title + '\',\'' + data[i].Description + '\',\'' + data[i].Link + '\');">' + data[i].Title + '<i class="' + data[i].Description + '"></i> </a></li>');
			}
		}

		return this.tmpbuffer2;
	}

	this.loadConsejos = function() {
		let tmp = "";
		if (this.ConsejosHab == 1) {
			if (this.ConsejosData != undefined && this.ConsejosData.toString() != "") {

			}
		}

		return tmp;
	}

	this.loadRecordatorios = function() {
		let tmp = "";

		return tmp;
	}

	this.ItemOnClick = function(id, title, description, link) {
		if (typeof(this.OnClick) == 'function') {
			this.SelectedItem.Id = id;
			this.SelectedItem.Title = title;
			this.SelectedItem.Description = description;
			this.SelectedItem.Link = link;
			this.OnClick();
		}
	}
	///UserCodeRegionEnd: (do not remove this comment.):
}