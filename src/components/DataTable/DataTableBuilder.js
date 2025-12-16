class DataTableBuilder {
  constructor() {
    this._columns = [];
    this._data = [];
    this._title = null;
    this._titleIcon = null;
    this._headerActions = null;
    this._footer = null;
    this._alternateRowColors = true;
    this._showHeader = true;
  }

  /**
   * Voeg een kolom toe aan de tabel
   * @param {string} type - Kolom type: 'text', 'badge', of 'custom'
   * @param {Object} config - Kolom configuratie
   * @param {string} config.header - Kolom header tekst
   * @param {string} config.field - Data veld key
   * @param {Function} [config.render] - Custom render functie (value, row, index) => ReactNode
   * @param {Function} [config.getBadgeColor] - Voor badge type: (value) => { bg, text }
   * @param {Object} [config.sx] - Extra MUI sx styling
   * @param {string} [config.align] - Tekst uitlijning: 'left', 'center', 'right'
   * @param {string|number} [config.width] - Kolom breedte
   * @returns {DataTableBuilder}
   */
  addColumn(type, config) {
    this._columns.push({
      type,
      header: config.header,
      field: config.field,
      render: config.render || null,
      getBadgeColor: config.getBadgeColor || null,
      sx: config.sx || {},
      align: config.align || 'left',
      width: config.width || 'auto',
    });
    return this;
  }

  /**
   * Stel de data array in voor de tabel
   * @param {Array<Object>} data - Array van rij objecten
   * @returns {DataTableBuilder}
   */
  setData(data) {
    this._data = data;
    return this;
  }

  /**
   * Stel de tabel titel in
   * @param {string} title - Titel tekst
   * @param {React.ReactNode} [icon] - Optioneel MUI icoon component
   * @returns {DataTableBuilder}
   */
  setTitle(title, icon = null) {
    this._title = title;
    this._titleIcon = icon;
    return this;
  }

  /**
   * Voeg actie knoppen toe aan de header
   * @param {React.ReactNode} actions - React elementen voor header acties
   * @returns {DataTableBuilder}
   */
  setHeaderActions(actions) {
    this._headerActions = actions;
    return this;
  }

  /**
   * Stel footer rij data in (voor totalen/gemiddelden)
   * @param {Object} footerData - Object met zelfde structuur als data rijen
   * @param {string} [label] - Label voor footer rij
   * @returns {DataTableBuilder}
   */
  setFooter(footerData, label = null) {
    this._footer = { data: footerData, label };
    return this;
  }

  /**
   * Schakel afwisselende rijkleuren in/uit
   * @param {boolean} enabled
   * @returns {DataTableBuilder}
   */
  setAlternateRowColors(enabled) {
    this._alternateRowColors = enabled;
    return this;
  }

  /**
   * Toon/verberg de header rij
   * @param {boolean} show
   * @returns {DataTableBuilder}
   */
  setShowHeader(show) {
    this._showHeader = show;
    return this;
  }

  /**
   * Bouw en retourneer het configuratie object
   * @returns {Object}
   */
  build() {
    return {
      columns: this._columns,
      data: this._data,
      title: this._title,
      titleIcon: this._titleIcon,
      headerActions: this._headerActions,
      footer: this._footer,
      alternateRowColors: this._alternateRowColors,
      showHeader: this._showHeader,
    };
  }
}

export default DataTableBuilder;
