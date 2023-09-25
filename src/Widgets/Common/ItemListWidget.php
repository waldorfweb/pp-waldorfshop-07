<?php

namespace Waldorfshop7\Widgets\Common;

use Ceres\Widgets\Helper\Factories\Settings\ValueListFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;

class ItemListWidget extends \Ceres\Widgets\Common\ItemListWidget
{
    protected $template = "Waldorfshop7::Widgets.Common.ItemListWidget";

    public function getSettings()
    {
        /** @var WidgetSettingsFactory $settings */
        $settings = WidgetSettingsFactory::inherit(parent::class);

        $settings->createCheckbox('asCarousel')
          ->withDefaultValue(false)
          ->withName('Widget.itemListAsCarouselLabel')
          ->withTooltip('Widget.itemListAsCarouselTooltip');

        return $settings->toArray();
    }
}
