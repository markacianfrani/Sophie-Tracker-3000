<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TrackerEvent extends Model
{
    protected $table = 'events';

    public function type() {
        return $this->belongsTo('App\EventType');
    }
}
