<?php

namespace Waldorfshop7\Widgets\Header;

use Ceres\Config\CeresConfig;
use Ceres\Widgets\Common\ImageBoxWidget;
use Ceres\Widgets\Helper\BaseWidget;
use IO\Helper\Utils;
use IO\Services\CategoryService;
use IO\Services\ItemSearch\Factories\Faker\CategoryTreeFaker;
use Ceres\Widgets\Helper\Factories\Settings\ValueListFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetCategories;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\WidgetTypes;
use Plenty\Modules\Webshop\Contracts\ContactRepositoryContract;

class AdvancedDesktopNavigationWidget extends BaseWidget
{
    /** @inheritDoc */
    protected $template = 'Waldorfshop7::Widgets.Header.AdvancedDesktopNavigationWidget';

    /**
     * @inheritDoc
     */
    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $listEntries = [];

        if ( array_key_exists("entries", $widgetSettings) )
        {
            $listEntries = $widgetSettings["entries"]["mobile"];
        }
        else
        {
            foreach( $widgetSettings["texts"]["mobile"] as $title )
            {
                $listEntries[] = [
                    "title" => $title,
                    "url"  => ""
                ];
            }
        }

        foreach( $listEntries as $i => $listEntry )
        {
            if ( is_string($listEntry["url"]) )
            {
                $listEntries[$i]["url"] = [
                    "type" => "external",
                    "value" => $listEntry["url"]
                ];
            }
        }

        return [
            "listEntries"   => $listEntries
        ];
    }

    /**
     * @inheritDoc
     */
    protected function getPreviewData($widgetSettings)
    {
        return [];
    }

    /**
     * @inheritDoc
     */
    public function getData()
    {
        return WidgetDataFactory::make('Waldorfshop7::AdvancedDesktopNavigationWidget')
            ->withLabel('Widget.navigationLabel')
            ->withPreviewImageUrl('/images/widgets/advanced-desktop-navigation.svg')
            ->withType(WidgetTypes::HEADER)
            ->withCategory(WidgetCategories::HEADER)
            ->withPosition(0)
            ->toArray();
    }

    /**
     * @inheritDoc
     */
    public function getSettings()
    {
        /** @var WidgetSettingsFactory $settingsFactory */
        $settingsFactory = pluginApp(WidgetSettingsFactory::class);

        $settingsFactory->createCustomClass();

        $settingsFactory->createCheckbox('isFixed')
            ->withName('Widget.navigationIsFixedLabel')
            ->withDefaultValue(true);

        $container = $settingsFactory->createVerticalContainer("entries")
            ->withList(1)
            ->withName("Widget.listEntryLabel");

        $container->children->createText("title")
            ->withName("Widget.listEntryNameLabel")
            ->withTooltip("Widget.listEntryNameTooltip");

        $container->children->createUrl("url")
            ->withName("Widget.listEntryUrlLabel")
            ->withTooltip("Widget.listEntryUrlTooltip");

        $container->children->createCategory("megamenu")
            ->withName("Widget.listEntryMegaMenuLabel")
            ->withTooltip("Widget.listEntryMegaMenuTooltip");

        $settingsFactory->createSpacing();

        return $settingsFactory->toArray();
    }
}
