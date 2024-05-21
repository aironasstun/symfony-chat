<?php

declare(strict_types=1);

namespace App\Enum;

enum Role: string
{
    case SuperAdmin = 'ROLE_SUPER_ADMIN';
    case Admin = 'ROLE_ADMIN';
    case User = 'ROLE_USER';

    private const MAP = [
        'ROLE_SUPER_ADMIN' => self::SuperAdmin,
        'ROLE_ADMIN' => self::Admin,
        'ROLE_USER' => self::User,
    ];

    public static function fromName(?string $name): ?self
    {
        return self::MAP[$name] ?? null;
    }

    /**
     * @return int[]
     */
    public static function getChoices(): array
    {
        $choices = [];

        foreach (self::cases() as $case) {
            $choices[$case->name] = $case->value;
        }

        return $choices;
    }
}
